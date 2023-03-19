import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../../styles/tenants.module.scss"

const AddTenantsForm = (props) => {

    return (
        <Modal 
         show={props.show}
         onHide={props.handleClose}
         contentClassName={styles.modal}
        >
            <Modal.Header >
                <Modal.Title>Añadir Inquilino</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Control type="text" placeholder="Nombre"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Control type="text" placeholder="Apellido"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCIN">
                        <Form.Control type="text" placeholder="CIN"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo Electronico" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumCelular">
                        <Form.Control type="text" placeholder="Numero de Celular" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Numero de Celular Auxiliar" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Departamento N°" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Tipo de Departamento" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={props.handleClose}>
                    Guardar
                </Button>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
                </Button>
               
            </Modal.Footer>
        </Modal>
    );
}


export default AddTenantsForm