import { Transformer } from "../domain/Transformer";
import { TransformerRepository } from "../domain/TransformerRepository";

export class GetByIdTransformerUseCase {
  constructor(readonly transformerRepository: TransformerRepository) {}

  async run(id_transformer: number): Promise<Transformer | null> {
    try {
      const result = await this.transformerRepository.getById(id_transformer, );
      return result;
    } catch (error) {
      return null;
    }
  }
}
