import { Router } from "express";
import WalletController from "../controllers/wallet_controller";

const router = Router()

router.post('/', WalletController.create_wallet)

// router.get('/:document_number', UserController.get_user_by_document_number)

export default router