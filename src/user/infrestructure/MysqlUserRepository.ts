import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {
  async getAll(): Promise<User[] | null> {
    const sql = "SELECT * FROM user ";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (user: any) => new User(user.id, user.name, user.mail, user.password)
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<User | null> {
    const sql = "SELECT * FROM user WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);

      return new User(
        result[0].id,
        result[0].name,
        result[0].mail,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    name: string,
    mail: string,
    password: string
  ): Promise<User | null> {
    const sql = "INSERT INTO user (name, mail, password) VALUES (?, ?, ?)";
    const params: any[] = [name, mail, password];
    console.log(params);
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      const usercreated = new User(result.insertId, name, mail, password);
      console.log(usercreated);
      return usercreated;
    } catch (error) {
      return null;
    }
  }
}
