import AdminsModel from "@/models/admins/Admins";
import CategoriesModel from "@/models/categories/categories";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server"
import path from "path"
export async function POST(request) {
    const formData = await request.formData();
    const data = {
        name: formData.get('name'),
        slug: formData.get('slug'),
        image: formData.get('image'),
        description: formData.get('description'),
        parent: formData.get('parent')
    };
    const {image}=data
    const validExtensions = ['jpeg', 'jpg', 'png', 'webp'];
    if (!image || !validExtensions.includes(image.name.toLowerCase().substring(image.name.lastIndexOf('.') + 1))) {
        return NextResponse.json({error:"پسوند فایل غیر مجاز است"},{status:200})
    }
    try{
        const buffer=Buffer.from(await image.arrayBuffer());
        const filename = Date.now() + image.name;
    await writeFile(
        path.join(process.cwd(), "public/imgs/categories/" + filename),
        buffer
    );
    let filePath="/imgs/categories/"+filename

    const admin=await new AdminsModel()
    const access=await admin.checkAccess()
    if(!access){
        return NextResponse.json({error:"شما اجازه دسترسی ندارید!"},{status:500})
    }
    const categoryData={
        name:data.name,
        slug:data.slug,
        description:data.description,
        parent:data.parent,
        image:filePath
    }
    const category=await new CategoriesModel()
    const catInfo=await category.add(categoryData)
    if(!catInfo){
        return NextResponse.json({error:"خطا در برقراری ارتباط با سرور!"},{status:500})
    }
    return NextResponse.json({success:"دسته بندی با موفقیت اضافه شد"},{status:200})
    }catch(e){
        
    return NextResponse.json({error:"خطا در برقراری ارتباط با سرور!"},{status:500})
    }
}
export async function GET() {
    const model=new CategoriesModel()
    const categories=await model.getAll()
    return NextResponse.json({categories},{status:200})

}
export async function DELETE(request) {
    const {searchParams}=new URL(request.url)
    const param=searchParams.get('id')
    const model= new CategoriesModel()
    const category=await model.delete(param)
    if(!category){
        return NextResponse.json({error:"خطا در انجام عملیات"})
    }
    
    return NextResponse.json({success:"دسته بندی با موفقیت حذف شد"})
}