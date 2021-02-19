import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import BusinessEntity from './Business.entity'
@Entity('employes')
export default class EmployeEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column('varchar',)
    name:string
    @Column('varchar',{unique:true})
    phone:string
    @Column('varchar',{unique:true})
    cpf:string
    @Column('varchar',{nullable:true})
    image:string
    @OneToOne(type => BusinessEntity)
    business: BusinessEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at:Date        
}