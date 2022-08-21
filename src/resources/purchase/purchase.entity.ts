import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { CustomerEntity } from '../customer/customer.entity';
import { PurchaseProductEntity } from '../custom/purchases-products.entity';


@Entity({ name: "purchase" })
export class PurchaseEntity extends BaseEntity {
  @Column()
  status!: string;

  @Column()
  paymentMethod!: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerEntity; 

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProduct) => purchaseProduct.purchase
  )
  purchaseProduct!: PurchaseProductEntity[];

}