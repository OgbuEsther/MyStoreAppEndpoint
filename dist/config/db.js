"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const localUrl = "mongodb://0.0.0.0:27017/bookstoreAPI";
const LifeURL = "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/MyBookStoreApi?retryWrites=true&w=majority";
mongoose_1.default.connect(LifeURL);
mongoose_1.default.connection
    .on("open", () => {
    console.log("database connected");
})
    .once("error", () => {
    console.log("failed to connect to database");
});
