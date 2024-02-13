import express from "express";
import UserController from "../controller/userController";

const router = express.Router();

router.post("/",UserController.userCreate)
router.get("/",UserController.getAllUser)
router.get("/:id",UserController.getOneUser)
router.delete("/",UserController.deleteAllUser)
router.delete("/:id",UserController.deleteOneUser)

export default router

