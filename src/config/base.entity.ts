import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!:string

  @CreateDateColumn({
    name: 'created_ad',
    type: 'timestamp'
  })
  createAd!: Date

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp'
  })
  updateAt!: Date
}