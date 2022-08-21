
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../utils/interfaces/base.entity";
import { CustomerEntity } from '../customer/customer.entity';

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  username!: string;

  @Column({ length: 1000 })
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  city!: string;

  @Column()
  province!: number;

  @OneToOne(() => CustomerEntity, (customer)=> customer.user)
  customer!: CustomerEntity
}