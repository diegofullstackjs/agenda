import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import CategoryEntity from './Category.entity'
import EmployeEntity from './Employe.entity'
import ServicesEntity from './Services.entity'
import UserEntity from './Users.entity'
@Entity('business')
export default class BusinessEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @OneToOne(type => UserEntity)
    @JoinColumn({name: 'user_id'})
    owner: UserEntity
    @OneToOne(type => CategoryEntity)
    @JoinColumn({name: 'categorie_id'})
    categorie: CategoryEntity
    @OneToOne(type => EmployeEntity)
    @JoinColumn({name: 'employes'})
    employes: EmployeEntity[]
    @Column('varchar')
    owner_name: string
    @Column('varchar')
    phone: string
    @Column('varchar', { length: 9 })
    cep: string
    @Column('varchar')
    endereco: string
    @Column('int')
    numero: number
    @Column('varchar')
    cidade: string
    @Column('varchar', { length: 3 })
    uf: string
    @Column('varchar', { nullable: true })
    complemento: string
    @OneToMany(type => ServicesEntity,service =>service.id,{nullable:true} )
    services: ServicesEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}