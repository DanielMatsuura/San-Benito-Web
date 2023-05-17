import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../../styles/components/addInquilinoForm.module.scss";

const EditInquilinoForm = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      contentClassName={styles.custom}
      className="custom"
    >
      <Modal.Header className={styles["modal-header"]}>
        <Modal.Title>Editar Inquilino</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles["modal-body"]}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
              type="text"
              placeholder="Nombre"
              defaultValue={props.inquilino.firstName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
              type="text"
              placeholder="Apellido"
              defaultValue={props.inquilino.lastName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCIN">
            <Form.Control
              type="text"
              placeholder="CIN"
              defaultValue={props.inquilino.cin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumCelular">
            <Form.Control
              type="text"
              placeholder="Numero de Celular"
              defaultValue={props.inquilino.phoneNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumCelularAux">
            <Form.Control
              type="text"
              placeholder="Numero de Celular Auxiliar"
              defaultValue={props.inquilino.phoneNumberAux}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptoN">
            <Form.Control
              type="text"
              placeholder="Departamento N°"
              defaultValue={props.inquilino.deptoNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptoTipo">
            <Form.Control
              type="text"
              placeholder="Tipo de Departamento"
              defaultValue={props.inquilino.deptoType}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicIsActive">
            <Form.Check type="checkbox" label="¿Alquilando?" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className={styles["modal-footer"]}>
        <Button variant="primary" onClick={props.handleClose}>
          Guardar
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditInquilinoForm;
