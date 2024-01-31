"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
const dotenv = require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(Routes_1.getRouter);
app.listen(process.env.PORT, () => {
    console.log(`server running at port ${port}`);
});
