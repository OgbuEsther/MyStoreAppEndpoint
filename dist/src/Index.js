"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bookRouter_1 = __importDefault(require("../router/bookRouter"));
require("../config/db");
const port = process.env.port || 2001;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.get("/", (req, res) => {
    return res.status(200).json({
        message: "server is up and running",
    });
});
server.use("/bookstore", bookRouter_1.default);
server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
