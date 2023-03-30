export default class InquilinoEntity{
    constructor(data){
        this.id = data.id;
        this.firstName = data.nombre;
        this.lastName = data.apellido;
        this.cin = data.cin;
        this.phoneNumber= data.celular;
        this.phoneNumberAux = data.celularAux;
        this.deptoNumber = data.departamentoN;
        this.deptoType = data.departamentoTipo;
        this.isActive = data.isActive;
    }
}