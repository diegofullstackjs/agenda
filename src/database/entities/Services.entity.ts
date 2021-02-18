import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import BusinessEntity from './Business.entity'
@Entity('services')
export default class ServicesEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column('varchar',{unique:true})
    name:string
    @Column('text',{nullable: true})
    description:string
    @ManyToOne(type => BusinessEntity)
    business: BusinessEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at:Date        
}