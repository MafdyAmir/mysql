import { Router } from "express";
import * as userController from "./user.controller.js";
const router = Router();

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.get("/search_User", userController.search_User);
router.get("/searchUserById", userController.searchUserById);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/getAllwithProducts", userController.getAllwithProducts);

export default router;
