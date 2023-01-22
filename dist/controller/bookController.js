"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQuery = exports.addBooks = exports.getOne = exports.getAll = void 0;
const BookSchema_1 = __importDefault(require("../model/BookSchema"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
//genaral get method
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield BookSchema_1.default.find();
        return res.status(200).json({
            message: "all books gotten ",
            data: allBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred",
            data: error,
        });
    }
});
exports.getAll = getAll;
//single get method
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const one = yield BookSchema_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "single book gotten",
            data: one,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred",
            data: error,
        });
    }
});
exports.getOne = getOne;
//post method
const addBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author, title, coverImage, summary, ISBN, views, authorImage, category, } = req.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const cloudImg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const newBook = yield BookSchema_1.default.create({
            author,
            title,
            coverImage: cloudImg.secure_url,
            summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            views,
            authorImage: author.charAt(0).toUpperCase(),
            category,
        });
        return res.status(201).json({
            message: "new book posted",
            data: newBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred",
            data: error,
        });
    }
});
exports.addBooks = addBooks;
const views = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newView = yield BookSchema_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip },
        }, { new: true });
        views;
        return res.status(200).json({
            message: "seen",
            data: views,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred",
            data: error,
        });
    }
});
const makeQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = yield BookSchema_1.default.find(req.query);
        return res.status(200).json({
            message: "gotten",
            data: search,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred",
            data: error,
        });
    }
});
exports.makeQuery = makeQuery;
