import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
//import * as mongoose from "mongoose";
// import { Sequelize } from 'sequelize-typescript'
import * as Sequelize from 'sequelize'
// import { Sequelize } from 'sequelize-typescript'
// import * as dotenv from "dotenv";
// dotenv.config();

//mport {DB_CONNECTION} from "./config";
//import { Routes } from "./routes/";
class App {
  public app: express.Application
  //public routePrv: Routes = new Routes();

  constructor() {
    this.app = express()
    this.config()
    //this.routePrv.routes(this.app);
    this.psqlSetup()
  }

  private config(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private psqlSetup(): void {
    const s = new Sequelize.Sequelize(
      'postgres://postgres:changeme@localhost:5432/shortenurl'
    )
    s.authenticate().then(() => {
        console.log('Connection established successfully.');
      }).catch(err => {
        console.error('Unable to connect to the database:', err);
      }).finally(() => {
        s.close();
      });
  }
}

export default new App().app
