import React, {useEffect, useState} from "react"
import { Container, Row, Col} from 'react-bootstrap';
import Navegacion from '../../components/Navegacion'
import styles from './inquilinos.module.scss'
import MyTable from "../../components/MyTable";
import AddTenantsForm from "../../components/tenants/AddTenantsForm";
import { useInquilino } from "../../src/context/inquilino-context";


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
    },
    {
        id: "2",
        name: "Carlos Matsuura",
        depto: "A1",
        tipoDepto: "Normal",
        celular: "0982546630",
        celularAux: "0984346459",
        estado: "Activo",
        accion: "Hola"
    }
]

function Inquilinos() {

    //Para el formulario de añadir un inquilino
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const handleShowForm = () => setShowForm(true);

    //Para los inquilinos
    const {inquilinos} = useInquilino();

    useEffect (()=>{
        console.log("Inquilino-index: ",inquilinos)
    },[inquilinos])
    return (
        <>
            <Container fluid className={styles.Cuerpo}>
                <Row className={styles.CuerpoNav}>
                    <Col className={styles.col}>
                        <Navegacion InquisState="true"></Navegacion>
                    </Col>
                </Row>
                <Row className={styles.filaButtonAñadir}>
                    <Col md="auto">
                        <a className="btn btn-info" href="#" role="button" onClick={handleShowForm}>Añadir Nuevo Inquilino</a>
                        <AddTenantsForm handleClose={handleCloseForm} show={showForm}></AddTenantsForm>
                    </Col>

                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <MyTable data={inquilinos}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Inquilinos


