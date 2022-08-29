import { Button } from "react-bootstrap"
import {AiTwotoneEdit,AiFillDelete,AiFillEye} from "react-icons/ai"
import styles from './table.module.scss'


const MyTable = (props) => {

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
                    <tr className={styles.filas}>
                        <td scope="row"><div>1</div></td>
                        <td><div>Juanito Ramirez</div></td>
                        <td><div>B7</div></td>
                        <td><div>Normal</div></td>
                        <td><div>0982546630</div></td>
                        <td><div>1223431</div></td>
                        <td><div>Activo</div></td>
                        <td>
                            <div className={styles.buttons}>
                                <button className="btn btn-info"><AiFillEye size={15}/></button>
                                <button className="btn btn-warning"><AiTwotoneEdit size={15}/></button>
                                <button className="btn btn-danger"><AiFillDelete size={15}/></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyTable;