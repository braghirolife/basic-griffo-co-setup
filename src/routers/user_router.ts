import { Router } from "express";
import UserController from '../controllers/user_controller'

const router = Router()

router.post('/', UserController.create_user)

export default router