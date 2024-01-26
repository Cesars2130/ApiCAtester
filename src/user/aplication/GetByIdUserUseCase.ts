import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class GetByIdUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: number): Promise<User | null> {
    try {
      const result = await this.userRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
