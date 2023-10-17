import myDataSource from "../utils/app-data-source"
import { Stock } from "../models/stock";
import axios from "axios";
import { response } from "express";

const session = myDataSource.getRepository(Stock)

async function update_stock(stock_payload: any){
    let stock_updated = new Stock()

    const stock_in_db = await session.findOne({
        where:{
            ticker: stock_payload.ticker
        }
    })
    
    if (stock_in_db != null){
        stock_in_db.current_price = stock_payload.current_price
        await session.save(stock_in_db)
    } else{
        let stock = new Stock()
        stock.current_price = stock_payload.current_price
        stock.ticker = stock_payload.ticker
        const stock_created = await session.create(stock)
        await session.save(stock_created)
    } 
    return
}


export default {
    update_stock
}
