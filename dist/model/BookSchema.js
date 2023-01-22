"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    summary: {
        type: String,
    },
    ISBN: {
        type: String,
    },
    views: {
        type: [],
    },
    authorImage: {
        type: String,
    },
    category: {
        type: String,
    },
});
const bookModel = mongoose_1.default.model("BookList", BookSchema);
exports.default = bookModel;
