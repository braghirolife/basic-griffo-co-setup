import { Router } from "express";
import UserController from '../controllers/user_controller'

const router = Router()

console.log('usando essa rota')

router.post('/', UserController.create_user)

export default router