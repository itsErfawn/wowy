import tokenGenerator from "@/libs/token/token";
import signinValidator from "@/libs/validator/sign-in";
import AdminsModel from "@/models/admins/Admins";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
    const data=await request.json()
    const validate=signinValidator(data)
    if(validate!==true){
        return NextResponse.json({error:validate[0].message},{status:"200"})
    }
    const AdminModel= new AdminsModel()
    let adminData=await AdminModel.get(data)
    if(!adminData){
        return NextResponse.json({error:"نام کاربری یا رمز عبور اشتباه است"},{status:200})
    }
    const userToken=tokenGenerator(adminData[0])
    const response= NextResponse.json({message:" ورود با موفقیت انجام شد"},{status:200})
    response.headers.set('Set-Cookie', `__token=${userToken}; Path=/; HttpOnly; Secure; Expires=SESSION`);
    return response;
}

export async function DELETE(request) {
    const cookie = await cookies();
    const url = new URL(request.url);
    const cookieName = url.searchParams.get("value"); 

    try {
        await cookie.delete(cookieName, { path: '/' }); 
        return NextResponse.json({ status: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false }, { status: 500 });
    }
}