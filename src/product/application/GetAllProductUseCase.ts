import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class GetAllProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(): Promise<Product[] | null> {
    try {
      const result = await this.productRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
