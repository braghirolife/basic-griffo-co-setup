import { Router } from "express";
import StockController from '../controllers/stock_controller'

const router = Router()

router.put('/', StockController.update_stock_price)

export default router