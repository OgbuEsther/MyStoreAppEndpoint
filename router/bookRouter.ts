import { Router } from "express";
import uploader from "../config/multer";
import { addBooks, getAll, getOne } from "../controller/bookController";

const router = Router();

router.route("/allbooks").get(getAll);
router.route("/getone/:id").get(getOne);
router.route("/newbook").post(uploader, addBooks);

export default router;
