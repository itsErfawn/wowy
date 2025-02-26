import AdminsModel from "@/models/admins/Admins";
import brandsModel from "@/models/brands/brands";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server"
import path from "path"
export async function POST(request) {
    const admin=await new AdminsModel()
    const access=await admin.checkAccess()
    if(!access){
        return NextResponse.json({error:"شما اجازه دسترسی ندارید!"},{status:500})
    }
    const formData = await request.formData();
    const data = {
        name: formData.get('name'),
        image: formData.get('image')
    }
    const { image } = data
    const validExtensions = ['jpeg', 'jpg', 'png', 'webp'];
    if (!image || !validExtensions.includes(image.name.toLowerCase().substring(image.name.lastIndexOf('.') + 1))) {
        return NextResponse.json({ error: "پسوند فایل غیر مجاز است" }, { status: 200 })
    }
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = Date.now() + image.name;
    await writeFile(
        path.join(process.cwd(), "public/imgs/brands/" + filename),
        buffer
    );
    let filePath = "/imgs/brands/" + filename
    const brand={
        name:data.name,
        image:filePath
    }
    const model= new brandsModel()
    const brandStatus=await model.add(brand)
    if(!brandStatus){
        return NextResponse.json({error:"خطا در برقراری ارتباط با سرور!"},{status:200})
    }
    return NextResponse.json({success:"برند با موفقیت اضافه شد"},{status:200})
}
export async function GET() {
    const model=new brandsModel()
    const brands=await model.getAll()
    return NextResponse.json({brands},{status:200})

}