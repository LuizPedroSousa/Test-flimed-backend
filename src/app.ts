import { config, DotenvConfigOutput } from "dotenv";
import express, { Express } from "express";
import { createServer, Server as HTTPServer } from "http";
import cors from "cors";
import { router } from "./routes";
import { createMongodbConnection } from "./database/connection";

class App {
  public express: Express;
  public dotenv: DotenvConfigOutput;
  public server: HTTPServer;
  public mongodbConnection: Promise<void>;

  constructor() {
    this.instances();
    this.middlewares();
  }

  instances() {
    this.express = express();
    this.server = createServer(this.express);
    this.dotenv = config();
    this.mongodbConnection = createMongodbConnection();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(router);
  }
}

const app = new App();

export { app };