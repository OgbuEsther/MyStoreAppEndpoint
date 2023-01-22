import bookModel from "../model/BookSchema";
import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
//genaral get method
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await bookModel.find();

    return res.status(200).json({
      message: "all books gotten ",
      data: allBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//single get method
const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const one = await bookModel.findById(req.params.id);

    return res.status(200).json({
      message: "single book gotten",
      data: one,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//post method

const addBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      author,
      title,
      coverImage,
      summary,
      ISBN,
      views,
      authorImage,
      category,
    } = req.body;

    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const isbn4 = Math.floor(Math.random() * 10000);

    const cloudImg = await cloudinary.uploader.upload(req?.file!.path);

    const newBook = await bookModel.create({
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
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

const views = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newView = await bookModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: { views: req.body.ip },
      },
      { new: true }
    );

    views;

    return res.status(200).json({
      message: "seen",
      data: views,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

const makeQuery = async (req: Request, res: Response): Promise<Response> => {
  try {
    const search = await bookModel.find(req.query);
    return res.status(200).json({
      message: "gotten",
      data: search,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

export { getAll, getOne, addBooks, makeQuery };
