import express, {Express, NextFunction, Request, Response, ErrorRequestHandler} from "express";
import { StatusCodes } from "http-status-codes";



const app: Express = express();
const PORT = process.env.PORT || 8000;

app.get("/",(req: Request, res: Response)=>{
    res.send("<h1>welcome to the homepage</h1>")
})

//custome error pages
app.use((req, res)=>{
    res.status(StatusCodes.NOT_FOUND);
    res.send("sorry error");
})

app.use(( req: Request, res: Response, next: NextFunction)=>{
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send("500-internal server error");
})


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}\nPress Ctl + C to terminate server`)
})