import { Request, Response } from "express";

import { GetByIdTransformerUseCase } from "../../application/GetByIdTransformerUseCase";

export class GetByUserTransformerController {
  constructor(readonly getByIdTransformerUseCase: GetByIdTransformerUseCase) {}

  async run(req: Request, res: Response) {
    const id_user: number = parseInt(req.params.id_user);

    try {
      const transformer = await this.getByIdTransformerUseCase.run( id_user);

      if (transformer)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: transformer.id,
            status: transformer.status,
            id_user: transformer.id_user
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
