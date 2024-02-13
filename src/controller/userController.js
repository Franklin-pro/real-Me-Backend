import express from "express";
import USER from "../model/user";
import errorMessage from "../utils/errorMessage";
import successMessage from "../utils/successMessage";
import bcrypt from 'bcrypt'

class UserController {
    static async userCreate(req, res) {
        try {
            const { firstName, lastName, email, passWord, confirmPassword } = req.body;

            if (req.body.passWord !== req.body.confirmPassword) {
                return errorMessage(res, 401, `password and confirmPassword do not match`);
            }
            const hashPassword = bcrypt.hashSync(req.body.passWord,10)

            const user = await USER.create({ firstName, lastName, email, passWord:hashPassword,});
            
            if (user) {
                return successMessage(res, 200, `user created successfully`, user);
            } else {
                return errorMessage(res, 401, `user not created`);
            }
        } catch (error) {
            return errorMessage(res, 500, error);
        }
    }

    static async getAllUser(req,res){
        try {
            const user = await USER.find();
            if(user){
                return successMessage(res,200,`all users retrived ${user.length}`,user)
            }else if(user.length==0){
                return errorMessage(res,201,`no users found`)
            }
        } catch (error) {
            return errorMessage(res,201,error)
        }
    }

    static async getOneUser(req,res){
        try {
            const id = req.params.id
            const user = await USER.findById(id)
            if(user){
                return successMessage(res,200,`user retrived ${user.firstName}`,user)
            }
            else{
                return errorMessage(res,401,`user not retrived`)
            }
        } catch (error) {
            return errorMessage(res,201,error)
        }
    }
    static async deleteAllUser(req,res){
        const user = await USER.deleteMany();
        if(user){
            return successMessage(res,200,`all users deleted`)
        }
    }
    static async deleteOneUser(req,res){
        const id = req.params.id;
        const user = await USER.findByIdAndDelete(id)
        if(user){
            return successMessage(res,200,`user deleted ${user.firstName}`)
        }else{
            return errorMessage(res,201,`user not deleted`)
        }
    }
}

export default UserController;
