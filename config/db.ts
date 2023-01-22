import mongoose from "mongoose";

const localUrl = "mongodb://0.0.0.0:27017/bookstoreAPI";

const LifeURL =
  "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/MyBookStoreApi?retryWrites=true&w=majority";

mongoose.connect(LifeURL);
mongoose.connection
  .on("open", () => {
    console.log("database connected");
  })
  .once("error", () => {
    console.log("failed to connect to database");
  });
