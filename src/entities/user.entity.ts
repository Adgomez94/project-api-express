
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column()
  username!: string;

  @Column({ length: 1000 })
  name!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: true })
  jobPosition?: string;

  @Column()
  numberPhone!: number;
}