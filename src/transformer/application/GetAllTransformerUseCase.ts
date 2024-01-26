import { Transformer } from "../domain/Transformer";
import { TransformerRepository } from "../domain/TransformerRepository";

export class GetAllTransformerUseCase {
  constructor(readonly transformerRepository: TransformerRepository) {}

  async run(): Promise<Transformer[] | null> {
    try {
      const result = await this.transformerRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
