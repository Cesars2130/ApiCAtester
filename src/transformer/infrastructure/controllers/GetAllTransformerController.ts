import { Request, Response } from "express";

import { GetAllTransformerUseCase } from "../../application/GetAllTransformerUseCase";

export class GetAllTransformerController {
  constructor(readonly getAllTransformerUseCase: GetAllTransformerUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const transformers = await this.getAllTransformerUseCase.run();
      console.log(transformers);
      if (transformers)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: transformers.map((transformer: any) => {
            return {
              id: transformer.id,
              status: transformer.status,
              id_user: transformer.id_user
            };
          }),
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
