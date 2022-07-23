import { Router } from "express";

export abstract class BaseRouter<T> {

  public router: Router
  public controller: T

  constructor(
    // se inicializa y tiene que devolver una clase un tipo T (genérico)
    TController: { new (): T }
  ) {
    this.router =  Router()
    this.controller = new TController()
    this.routes()
  }

  routes() {}
}