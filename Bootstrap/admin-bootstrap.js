import { tokenVerifier } from "@/libs/token/token"
import AdminsModel from "@/models/admins/Admins"
import brandsModel from "@/models/brands/brands"
import CategoriesModel from "@/models/categories/categories"
import CookieStore from "@/models/cookies/Cookie"
import { redirect } from "next/navigation"

const adminBootstrap={
async validate() {
    let token=await CookieStore.get('__token')
    if(!token){
        redirect('/admin/sign-in')
    }
    const verify=await tokenVerifier(token.value)
    if(!verify){
            await CookieStore.remove('__token')
            redirect('/admin/sign-in')
    }
},
async home(){
    await this.validate()
},
async profile(){
    await this.validate()
    return await AdminsModel.getSelf()
},
async categories(){
    await this.validate()
        const model=await new CategoriesModel();
        const category=await model.getAll()
        return category
},
async brands(){
    await this.validate()
    const model=new brandsModel()
    const brands=await model.getAll()    
    return brands
}
}
export default adminBootstrap