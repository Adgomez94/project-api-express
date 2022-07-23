import * as dotenv from 'dotenv'
import { DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

// solo sirve para la herencia 
export abstract class ConfigServer {

  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)
    dotenv.config({
      path: nodeNameEnv
    })
  }

  getEnvironment(key: string):string | undefined {
    return process.env[key]
  }

  getNumberEnv(key: string):number {
    return Number(process.env[key])
  }

  public get nodeEnv():string {
    return this.getEnvironment('NODE_ENV')?.trim() || ""
  }

  public createPathEnv(path : string):string {
    const arrEnv: string[] = ['env']

    if(path.length > 0){
      const stringToArray = path.split('.')
      arrEnv.unshift(...stringToArray)
    }
    return '.' + arrEnv.join('.')
  }

//   DB_HOST=127.0.0.1
// DB_USER=admin
// DB_PASSWORD=admin
// DB_DATABASE=projectApi

  public get typeORMConfig():DataSourceOptions {
    return {
      type: "postgres",
      host: this.getEnvironment("DB_HOST"),
      port: this.getNumberEnv("DB_PORT"),
      username: this.getEnvironment("DB_USER"),
      password: this.getEnvironment("DB_PASSWORD"),
      database: this.getEnvironment("DB_DATABASE"),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
    }
  }
}