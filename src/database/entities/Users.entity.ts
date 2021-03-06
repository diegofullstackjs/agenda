import {BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
@Entity('user')
export default class UserEntity {
@PrimaryGeneratedColumn('uuid')
id:string
@Column('varchar',{unique:true})
email:string
@Column('varchar')
password:string
@CreateDateColumn()
created_at: Date
@UpdateDateColumn()
updated_at:Date
}