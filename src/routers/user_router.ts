import { Router } from "express";
import UserController from '../controllers/user_controller'

const router = Router()

router.post('/', UserController.create_user)

router.post('/login', UserController.login_user)

export default router