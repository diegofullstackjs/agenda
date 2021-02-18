import CategoryEntity from "src/database/entities/Category.entity";
import UserEntity from "src/database/entities/Users.entity";

export interface IVIACEP {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}
export default class BusinessDTO {
    constructor(
        public owner: UserEntity,
        public owner_name:string,
        public categorie:CategoryEntity,
        public phone:string,
        public cep:string,
        public endereco:string,
        public numero: number,
        public cidade: string,
        public uf: string,
        public complemento: string
    ){}
}