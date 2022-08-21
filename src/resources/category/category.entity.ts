import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { ProductEntity } from "../product/product.entity";


@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {

  @Column()
  categoryName!: string;

  @OneToMany(() => ProductEntity, (product)=> product.category)
  products!: ProductEntity[];
}