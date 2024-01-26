import { Transformer } from "../domain/Transformer";
import { TransformerRepository } from "../domain/TransformerRepository";

export class CreateTransformerUseCase {
  constructor(readonly userRepository: TransformerRepository) {}

  async run(status: boolean, id_user: number): Promise<Transformer | null> {
    try {
      const Transformer = await this.userRepository.createTransformer(
        id_user,
        status
      );
      return Transformer;
    } catch (error) {
      return null;
    }
  }
}
