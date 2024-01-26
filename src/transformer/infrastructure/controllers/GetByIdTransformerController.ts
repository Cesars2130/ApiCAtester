import { Request, Response } from "express";

import { GetByIdTransformerUseCase } from "../../application/GetByIdTransformerUseCase";

export class GetByIdTransformerController {
  constructor(readonly getByIdTransformerUseCase: GetByIdTransformerUseCase) {}
  async run(req: Request, res: Response) {
    console.log(req);
    const id_transformer: number = parseInt(req.params.id_transformer);
    try {
      const transformer = await this.getByIdTransformerUseCase.run( id_transformer);
      console.log(transformer);
      if (transformer)
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
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
