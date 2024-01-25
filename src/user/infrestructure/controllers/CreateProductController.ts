import { Request, Response } from "express";

import { CreateUserUseCase } from "../../aplication/CreateUserUseCase";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.createUserUseCase.run(
        data.name,
        data.mail,
        data.password
      );

      if (user)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: user?.id,
            name: user?.name,
            description: user?.mail,
            price: user?.password,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
