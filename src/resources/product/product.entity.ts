import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { CategoryEntity } from "../category/category.entity";
import { PurchaseProductEntity } from '../custom/purchases-products.entity';


@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {

  @Column()
  productName!: string;

  @Column({ length: 1000 })
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => CategoryEntity, (category)=> category.products)
  @JoinColumn({name: "category_id"})
  category!:CategoryEntity;

  @OneToMany(() => PurchaseProductEntity, (purchaseProduct)=> purchaseProduct.product)
  purchaseProduct!:PurchaseProductEntity[]; 
}