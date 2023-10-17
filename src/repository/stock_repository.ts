import myDataSource from "../utils/app-data-source"
import { Stock } from "../models/stock";

const session = myDataSource.getRepository(Stock)

async function update_stock(stock_payload: any){
    let stock_updated = new Stock()

    const stock_in_db = await session.findOne({
        where:{
            ticker: stock_payload.results[0].symbol
        }
    })
    
    if (stock_in_db != null){
        stock_in_db.current_price = stock_payload.results[0].regularMarketPrice
        await session.save(stock_in_db)
    } else{
        let stock = new Stock()
        stock.current_price = stock_payload.results[0].regularMarketPrice
        stock.ticker = stock_payload.results[0].symbol
        const stock_created = await session.create(stock)
        await session.save(stock_created).then((result) => console.log(result)).catch((error) => console.log(error))
    } 
    return
}


export default {
    update_stock
}
