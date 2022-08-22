
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
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Juanito Ramirez</td>
                        <td>B7</td>
                        <td>Normal</td>
                        <td>0982546630</td>
                        <td>1223431</td>
                        <td>Activo</td>
                        <td>buttons</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyTable;