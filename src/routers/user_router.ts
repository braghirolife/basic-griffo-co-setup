import { Router } from "express";
import UserController from '../controllers/user_controller'

const router = Router()

router.post('/', UserController.create_user)

router.get('/:document_number', UserController.get_user_by_document_number)

export default router