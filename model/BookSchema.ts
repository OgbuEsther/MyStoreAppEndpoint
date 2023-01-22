import mongoose from "mongoose";

interface Ibooks {
  author: string;
  title: string;
  coverImage: string;
  summary: string;
  ISBN: string;
  views: [];
  authorImage: string;
  category: string;
}

interface books extends Ibooks, mongoose.Document {}

const BookSchema = new mongoose.Schema({
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

const bookModel = mongoose.model<books>("BookList", BookSchema);

export default bookModel;
