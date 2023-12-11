import { Request, Response, NextFunction } from "express";
import { TOKEN, BRASPI_URL } from "../constants"
import axios from 'axios';
// import { Stock } from "../models/stock";
// import StockRepository from "../repository/stock_repository";

interface StockInterface{
    ticker?: string
}

interface BoughtStockInterface{

}

async function update_stock_price(req: Request<{}, {}, StockInterface>, resp: Response, next: NextFunction){
    const ticker = req.body?.ticker

    if (ticker == null){
        resp.status(400)
        resp.send({
            'message': 'Deu ruim'
        })
    }

    const url_get_stock_data = `${BRASPI_URL}/quote/${ticker}/?token=${TOKEN}`
    const result = await axios.get(url_get_stock_data)
    const data = result.data

    // StockRepository.update_stock(data)

    resp.status(200)
    resp.send({
        'message': 'updated'
    })
}

function buy_stock_by_user(bought_stock_payload: BoughtStockInterface){
    return
}

export default{
    update_stock_price,
    buy_stock_by_user
}