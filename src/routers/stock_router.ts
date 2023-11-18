import { Router } from "express";
import StockController from '../controllers/stock_controller'

const router = Router()

router.put('/', StockController.update_stock_price)

router.get('/cripto/:symbol', StockController.get_cryptocurrency_info)

export default router