import express from "express";
import UserController from "../controller/userController";
import DataChecker from "../middleware/dataChecker";
import Validator from "../middleware/validator";

const router = express.Router();

router.post("/",DataChecker.inputEmpty,DataChecker.emailExist,Validator.userAccountRule(),Validator.inputValidator,UserController.userCreate)
router.get("/",UserController.getAllUser)
router.get("/:id",UserController.getOneUser)
router.delete("/",UserController.deleteAllUser)
router.delete("/:id",UserController.deleteOneUser)
router.post("/login",UserController.login)

export default router

