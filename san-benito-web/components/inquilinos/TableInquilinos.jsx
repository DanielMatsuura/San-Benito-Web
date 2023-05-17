import styles from "../../styles/components/tableInquilinos.module.scss";
import InquilinoItem from "./InquilinoItem";

const TableInquilinos = (props) => {
  let inquilinos = props.data;

  return (
    <div>
      <table className="table">
        <caption>Lista de Inquilinos</caption>
        <thead className="thead-dark">
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
          {inquilinos.map((listValue, index) => {
            return (
              <tr key={index} className={styles.filas}>
                <InquilinoItem inquilino={listValue}></InquilinoItem>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableInquilinos;
