import { BaseLogger } from "./baseLogger.js";



//extends ile BaseLogger i inherit ettik
export class MongoLogger extends BaseLogger {
    log(data){
        console.log("Logged to Mongo"+ data)
    }
}