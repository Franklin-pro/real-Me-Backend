import USER from "../model/user";
import errorMessage from "../utils/errorMessage";


class DataChecker {
    static async inputEmpty(req,res,next){
const {firstName,lastName,email,passWord,confirmPassword}=req.body
if(firstName ==""){
    return errorMessage(res,201,`write firstName correctly`)
}else if(lastName ==""){
    return errorMessage(res,201,`write lastName correctly`)
}
else if(email ==""){
    return errorMessage(res,201,`write email correctly`)
}
else if(passWord ==""){
    return errorMessage(res,201,`write password correctly`)
}
else if(confirmPassword ==""){
    return errorMessage(res,201,`write confirmPassword correctly`)
}
else{
    next()
}
    }

    static async emailExist(req,res,next){
        const{email}=req.body
        const user = await USER.findOne({email});

        if(user){
            return errorMessage(res,401,`email exist please use different`)
        }
        else{
            next()
        }
    }

}
export default DataChecker;