import { Transformer } from "./Transformer";

export interface TransformerRepository {
  getAll(): Promise<Transformer[] | null>;
  getById(id_transformer: number  ): Promise<Transformer | null>;
  getByUser(id_user : number): Promise<Transformer | null>;
  createTransformer(
    id_user : number,
    status : boolean
    
  ): Promise<Transformer | null>;
}
