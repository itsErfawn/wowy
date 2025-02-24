import { tokenVerifier } from "@/libs/token/token"
import AdminsModel from "@/models/admins/Admins"
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
}
}
export default adminBootstrap