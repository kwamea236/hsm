"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("<h1>welcome to the homepage</h1>");
});
//custome error pages
app.use((req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND);
    res.send("sorry error");
});
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    res.send("500-internal server error");
});
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}\nPress Ctl + C to terminate server`);
});
