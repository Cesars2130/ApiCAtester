import { Transformer } from "../domain/Transformer";
import { TransformerRepository } from "../domain/TransformerRepository";

export class GetByUserTransformerUseCase {
  constructor(readonly transformerRepository: TransformerRepository) {}

  async run(id_user: number): Promise<Transformer | null> {
    try {
      const result = await this.transformerRepository.getById(id_user, );
      return result;
    } catch (error) {
      return null;
    }
  }
}
