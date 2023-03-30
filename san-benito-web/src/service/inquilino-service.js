import InquilinoEntity from "../entities/inquilino-entity";
import { api } from "../repositories/api";

const getAllInquilinos = () => {
    return api.get('/Inquilino')
};

const parseDtoToInquilinos = (responseData) =>{
    let inquilinoList  = [];

    responseData.forEach(inquilinoDto => {
        let inquilino = new InquilinoEntity(inquilinoDto);
        inquilinoList.push(inquilino);
    });
    return inquilinoList
}


const InquilinoService  = {
    getAllInquilinos,
    parseDtoToInquilinos
};

export default InquilinoService


