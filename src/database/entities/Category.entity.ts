import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
@Entity('category')
export default class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column('varchar',{unique:true})
    name:string
    @Column('text',{nullable: true})
    description:string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at:Date        
}