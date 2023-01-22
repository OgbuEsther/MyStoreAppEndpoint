"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const bookController_1 = require("../controller/bookController");
const router = (0, express_1.Router)();
router.route("/allbooks").get(bookController_1.getAll);
router.route("/getone/:id").get(bookController_1.getOne);
router.route("/newbook").post(multer_1.default, bookController_1.addBooks);
exports.default = router;
