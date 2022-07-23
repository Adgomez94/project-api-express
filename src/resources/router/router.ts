import { Router } from "express";

export class BaseRouter<T> {

  public router: Router
  public controller: T

  constructor(
    // se inicializa y tiene que devolver una clase un tipo T (generico)
    TController: { new (): T }
  ) {
    this.router =  Router()
    this.controller = new TController()
    this.routes()
  }

  routes() {}
}