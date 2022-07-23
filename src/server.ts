import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import UserRouter from './resources/router/user.router'
import { ConfigServer } from './config/config'
import { DataSource } from 'typeorm'

class ServerBootstrap extends ConfigServer {

  public app: express.Application = express()
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super()
    //DB
    this.dbConnect()

    // Middleware
    this.initialsMiddleware()

    // Router
    this.app.use('/api', this.routers())

    this.listen()
  }

  private initialsMiddleware():void {   
    this.app
      .use(cors())
      .use(morgan('dev'))
      .use(express.json())
      .use(express.urlencoded({extended:false}))
  }

  async dbConnect():Promise<DataSource> {
      return await new DataSource(this.typeORMConfig).initialize()
  }

  routers():Array<express.Router> {
    return [
      new UserRouter().router
    ]
  }

  public listen():void {
    this.app.listen(this.port, ()=>{
      console.log("Server listening on port "+ this.port)
    })
  }
}

new ServerBootstrap()
