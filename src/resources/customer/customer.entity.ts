
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { UserEntity } from "../user/user.entity";
import { PurchaseEntity } from '../purchase/purchase.entity';
import { PurchaseProductEntity } from '../custom/purchases-products.entity';

@Entity({ name: "customer" })
export class CustomerEntity extends BaseEntity {
  @Column()
  address!: string;

  @Column()
  dni!: string;

  @OneToOne(()=> UserEntity, (user) => user.customer)
  @JoinColumn({name: 'user_id'}) // name: le pone el nombre a la columna
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchases!: CustomerEntity[]; 

  @OneToMany(() => PurchaseProductEntity, (purchaseProduct)=> purchaseProduct.purchase)
  purchaseProduct!:PurchaseProductEntity[];
}