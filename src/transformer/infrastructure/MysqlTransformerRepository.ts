import { query } from "../../database/mysql";
import { Transformer } from "../domain/Transformer";
import { TransformerRepository } from "../domain/TransformerRepository";

export class MysqlTransformerRepository implements TransformerRepository {
  
  async getAll(): Promise<Transformer[] | null> {
    const sql = "SELECT * FROM transformer";
    console.log(sql);
    try {
      const [data]: any = await query(sql, []);
      const dataTransformers = Object.values(JSON.parse(JSON.stringify(data)));
      return dataTransformers.map(
        (transformer: any) =>
          new Transformer(
            transformer.id_transformer,
            transformer.status,
            transformer.id_user,
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById( id_transformer: number): Promise<Transformer | null> {
    console.log(id_transformer)
    const sql = "SELECT * FROM transformer WHERE id_transformer=?";//cambiar query
    const params: any[] = [id_transformer];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);
      return new Transformer(
        result[0].id_transformer,
        result[0].id_user,
        result[0].status
      );
    } catch (error) {
      return null;
    }
  }
  async getByUser( id_user: number): Promise<Transformer | null> {
    const sql = "SELECT * FROM transformer WHERE id_user=?";//cambiar query
    const params: any[] = [id_user];
    try {
      const [result]: any = await query(sql, params);
      return new Transformer(
        result[0].id,
        result[0].status,
        result[0].id_user,
      );
    } catch (error) {
      return null;
    }
  }

  async createTransformer(
    id_user: number,
    status: boolean
  ): Promise<Transformer | null> {
    const sql =
      "INSERT INTO transformer (id_user, status) VALUES (?, ?)";
    const params: any[] = [status , id_user];
    try {
      const [result]: any = await query(sql, params);
      return new Transformer(result.insertId_transformer, id_user, status);
    } catch (error) {
      return null;
    }
  }

  



}
