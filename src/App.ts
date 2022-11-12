import express, {Express, NextFunction, Request, Response, ErrorRequestHandler} from "express";
import HttpError from "./HttpErrorHandle.js";

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.get("/",(req: Request, res: Response)=>{
    res.json({
        message: "hello world"
    });
})


//custome error pages
app.use((req, res)=>{
    res.status(404);
    res.send("sorry error");
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction)=>{
    const status = err.status || 404;
    const message = err.message || "Something went wrong";
    console.log(message);
    res.status(status);
    res.send("500-internal server error");
})


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}\nPress Ctl + C to terminate server`)
})