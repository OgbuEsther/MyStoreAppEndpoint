import express, { Application, Request, Response } from "express";
import cors from "cors";

import router from "../router/bookRouter";

require("../config/db");

const port: number | string = process.env.port || 2001;

const server: Application = express();

server.use(express.json());
server.use(cors());
server.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "server is up and running",
  });
});

server.use("/bookstore", router);

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
