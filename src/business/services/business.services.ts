import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BusinessEntity from 'src/database/entities/Business.entity';
import { Repository } from 'typeorm';
import BusinessDTO from '../dto/business.dto';
@Injectable()
export default class BusinesService {
    constructor(
        @InjectRepository(BusinessEntity)
        private businessRepo: Repository<BusinessEntity>
    ) {

    }
    async index(): Promise<BusinessEntity[] | null> {
        return await this.businessRepo.find({relations:['owner','categorie']})
    }
   async create(data: BusinessDTO): Promise<Omit<BusinessEntity,'id'> | null>{
        return await this.businessRepo.save(data)
    }
}
