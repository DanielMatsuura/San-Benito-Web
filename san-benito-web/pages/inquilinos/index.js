import React from "react"
import { Container, Row, Col, Button, Table, BootstrapTable } from 'react-bootstrap';
import Navegacion from '../../components/Navegacion'
import styles from './inquilinos.module.scss'
import MyTable from "../../components/MyTable";

var columns = [
    { dataField: "id", text: "#" },
    { dataField: "name", text: "Nombre" },
    { dataField: "depto", text: "Depto" },
    { dataField: "tipoDepto", text: "TipoDepto" },
    { dataField: "celular", text: "Celular" },
    { dataField: "celularAux", text: "Celular Aux" },
    { dataField: "estado", text: "Estado" },
    { dataField: "accion", text: "Acciones" },
]

var lista = [
    {
        id: "1",
        name: "Daniel Matsuura",
        depto: "OFI",
        tipoDepto: "Especial",
        celular: "0982546630",
        celularAux: "0984346459",
        estado: "Activo",
        accion: "Hola"
    }
]



function Inquilinos() {
    return (
        <div>
            <body>
                <Container fluid className={styles.Cuerpo}>
                    <Row className={styles.CuerpoNav}>
                        <Col className={styles.col}>
                            <Navegacion InquisState="true"></Navegacion>
                        </Col>
                    </Row>
                    <Row className={styles.filaButtonAñadir}>
                        <Col md="auto">
                            <a class="btn btn-info" href="#" role="button">Añadir Nuevo Inquilino</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <MyTable
                                data={lista}
                                columns={columns}
                            >
                            </MyTable>
                        </Col>
                    </Row>
                </Container>
            </body>
        </div>
    )
}

export default Inquilinos


