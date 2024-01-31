"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const interface_1 = require("../interface");
exports.router = (0, express_1.Router)();
exports.router.post('/register', (req, res) => {
    const { name, password, phoneNumber } = req.body;
    interface_1.user.push({ name, password, phoneNumber, id: Math.floor(Math.random() * 100) });
    return res.send({ message: "User Registred successfully, Thank you" });
});
exports.router.get('/getUsers', (req, res) => {
    return res.status(200).send(interface_1.user);
});
