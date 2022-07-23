import * as dotenv from 'dotenv'

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
}