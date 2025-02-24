const jwt=require('jsonwebtoken')
import { verify } from 'jsonwebtoken'
export default function tokenGenerator(data){
    const token=jwt.sign(data,process.env.privateKey,{algorithm:"HS256"})
    return token
}
export function tokenVerifier(data){
    try{
        const validation=verify(data,process.env.privateKey)
        return validation
    }catch(err){
        return false
    }
}