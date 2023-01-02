import { Button } from "react-bootstrap"
import {AiTwotoneEdit,AiFillDelete,AiFillEye} from "react-icons/ai"
import styles from './table.module.scss'


const MyTable = (props) => {
    let inquilinos = props.data
    
    return (
        <div>
            <table class="table">
                <caption>Lista de Inquilinos</caption>
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Depto</th>
                        <th scope="col">Tipo de Depto</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Celular Aux</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {inquilinos.map(( listValue, index ) => {
                    return (
                        <tr key={index} className={styles.filas}>
                            <td scope="row"><div>{listValue.id}</div></td>
                            <td><div>{listValue.name}</div></td>
                            <td><div>{listValue.depto}</div></td>
                            <td><div>{listValue.tipoDepto}</div></td>
                            <td><div>{listValue.celular}</div></td>
                            <td><div>{listValue.celularAux}</div></td>
                            <td><div>{listValue.estado}</div></td>
                            <td>
                                <div className={styles.buttons}>
                                    <button className="btn btn-info"><AiFillEye size={15}/></button>
                                    <button className="btn btn-warning"><AiTwotoneEdit size={15}/></button>
                                    <button className="btn btn-danger"><AiFillDelete size={15}/></button>
                                </div>
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MyTable;