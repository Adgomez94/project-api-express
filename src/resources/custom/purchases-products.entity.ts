import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { ProductEntity } from '../product/product.entity';
import { PurchaseEntity } from '../purchase/purchase.entity';



@Entity({ name: "purchases_products" })
export class PurchaseProductEntity extends BaseEntity {

  @Column()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => PurchaseEntity, (purchase)=>purchase.purchaseProduct)
  @JoinColumn({name: 'purchase_id'})
  purchase!: PurchaseEntity;

  @ManyToOne(() => ProductEntity, (product)=>product.purchaseProduct)
  @JoinColumn({name: 'product_id'})
  product!: PurchaseEntity;
}