import errorMessage from "../utils/errorMessage";
import { check,validationResult } from "express-validator";

class Validator{
    static inputValidator(req,res,next){
        const error=validationResult(req)
        if(!error==error.isEmpty()){
            error.errors.map((err)=>{
                return errorMessage(res,401,err.msg)
            })
        }
        else{
            return next()
        }
    }
    static userAccountRule(){
        return[
                check("firstName","please write your FirstName correctly").trim().isAlpha(),
                check("lastName","please write your LastName correctly").trim().isAlpha(),
                check("email","please Email must be contains @gmail.com").trim().isEmail(),
                check("passWord","please make strong password start with capital letter and mix symbols,letter,number(@,1,a)").isStrongPassword(),
        ]
    }
}
export default Validator