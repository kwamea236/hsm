"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get("/", (req, es) => {
    res.json({
        message: "hello world"
    });
});
//custome error pages
app.use((req, res) => {
    res.status(404);
    res.send("sorry error");
});
app.use((err, req, res, next) => {
    const status = err.status || 404;
    const message = err.message || "Something went wrong";
    console.log(message);
    res.status(status);
    res.send("500-internal server error");
});
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}\nPress Ctl + C to terminate server`);
});
