import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../../styles/components/addInquilinoForm.module.scss";

const AddInquilinoForm = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      contentClassName={styles.custom}
      className="custom"
    >
      <Modal.Header className={styles["modal-header"]}>
        <Modal.Title>Añadir Inquilino</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles["modal-body"]}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCIN">
            <Form.Control type="text" placeholder="CIN" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumCelular">
            <Form.Control type="text" placeholder="Numero de Celular" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumCelularAux">
            <Form.Control
              type="text"
              placeholder="Numero de Celular Auxiliar"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptoN">
            <Form.Control type="text" placeholder="Departamento N°" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptoTipo">
            <Form.Label>Tipo de Departamento</Form.Label>
            <Form.Select>
              <option value="ofi">Oficina</option>
              <option value="basic">Basico</option>
              <option value="normal">Normal</option>
              <option value="special">Especial</option>
            </Form.Select>
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

export default AddInquilinoForm;
