import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from '../../styles/components/navegacion.module.scss'
import Link from 'next/link'
import SeccionNavegacion from "./SeccionNavegacion";

const Navegacion = props => {
    return (
        <Navbar className={styles.navegador} expand="lg">
            <Container fluid className={styles.body}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center d-flex" id={styles.title_navegator}>
                        <Navbar.Text >
                            <Link href={"/home"}><div><h4><b>Residencia San Benito</b></h4></div></Link>
                        </Navbar.Text>
                    </Nav>
                    <Nav className="me-auto" id={styles.icons_navegator}>
                        <div id={styles.icons_navegator_body}>
                            <Link href={"/departamentos"}><div><SeccionNavegacion isActive={props.DeptosState} image="bi bi-building" name="Departamentos"></SeccionNavegacion></div></Link>
                            <Link href={"/inquilinos"}><div><SeccionNavegacion isActive={props.InquisState} image="bi bi-people-fill" name="Inquilinos"></SeccionNavegacion></div></Link>
                            <Link href={"/contratos"}><div><SeccionNavegacion isActive={props.ContratosState} image="bi bi-file-earmark-text-fill" name="Contratos"></SeccionNavegacion></div></Link>
                            <Link href={"/pagos"}><div><SeccionNavegacion isActive={props.PagosState} image="bi bi-coin" name="Pagos"></SeccionNavegacion></div></Link>
                        </div>
                    </Nav>

                    <Nav className="justify-content-center d-flex" id={styles.login_navegator}>
                        <Navbar.Text >
                            Daniel - Administrador
                        </Navbar.Text>
                        <Button className={styles.btnCloseSeccion} variant="secondary">Cerrar Sesión</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegacion
