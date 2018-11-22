import { product } from "./product";

export interface response
{
    statusCode: number,
    message: string, 
    data?: product
}