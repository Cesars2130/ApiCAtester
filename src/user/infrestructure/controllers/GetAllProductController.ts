import { Request, Response } from "express";

import { GetAllUserUseCase } from "../../aplication/GetAllUserUseCase";

export class GetAllUserController {
  constructor(readonly getAllUserUseCase: GetAllUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const user = await this.getAllUserUseCase.run();
      console.log(user);
      if (user)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: user.map((user: any) => {
            return {
              id: user.id,
              name: user.name,
              mail: user.mail,
              password: user.password,
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
