import { Request, Response } from "express";

import { CreateTransformerUseCase } from "../../application/CreateTransformerUseCase";

export class CreateTransformerController {
  constructor(readonly createTransformerUseCase: CreateTransformerUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const transformer = await this.createTransformerUseCase.run(
        data.id_user,
        data.status
      );

      if (transformer)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id_user: transformer?.id_user,
            status: transformer?.status,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro",
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
