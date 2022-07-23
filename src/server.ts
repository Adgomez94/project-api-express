import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import UserRouter from './resources/router/user.router'

class ServerBootstrap {

  public app: express.Application = express()
  private port: number = 8000

  constructor() {
    // Middleware
    this.initialseMiddleware()

    // Router
    this.app.use('/api', this.routers())

    this.listen()
  }

  private initialseMiddleware():void {
    
    this.app
      .use(cors())
      .use(morgan('dev'))
      .use(express.json())
      .use(express.urlencoded({extended:false}))
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
