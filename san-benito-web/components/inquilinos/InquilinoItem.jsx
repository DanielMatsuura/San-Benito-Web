import React, { useState } from "react";
import styles from "../../styles/components/tableInquilinos.module.scss";
import { AiTwotoneEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import EditInquilinoForm from "./EditInquilinoForm";
import { useRouter } from "next/router";

const InquilinoItem = ({ inquilino }) => {
  const [showEditPopout, setShowEditPopout] = useState(false);
  const router = useRouter();

  const handleEditClick = () => {
    setShowEditPopout(true);
  };

  const handleCancelClick = () => {
    setShowEditPopout(false);
  };

  const handleSeeDetails = () => {
    const href = "inquilinos/" + inquilino.id;
    router.push(href);
  };
  return (
    <>
      <td scope="row">
        <div>{inquilino.id}</div>
      </td>
      <td>
        <div>
          {inquilino.firstName} {inquilino.lastName}
        </div>
      </td>
      <td>
        <div>{inquilino.deptoNumber}</div>
      </td>
      <td>
        <div>{inquilino.deptoType}</div>
      </td>
      <td>
        <div>{inquilino.phoneNumber}</div>
      </td>
      <td>
        <div>{inquilino.phoneNumberAux}</div>
      </td>
      <td>
        <div>{inquilino.isActive}</div>
      </td>
      <td>
        <div className={styles.buttons}>
          <button className="btn btn-info" onClick={handleSeeDetails}>
            <AiFillEye size={15} />
          </button>
          <EditInquilinoForm
            inquilino={inquilino}
            show={showEditPopout}
            handleClose={handleCancelClick}
          ></EditInquilinoForm>
          <button className="btn btn-warning" onClick={handleEditClick}>
            <AiTwotoneEdit size={15} />
          </button>
          <button className="btn btn-danger">
            <AiFillDelete size={15} />
          </button>
        </div>
      </td>
    </>
  );
};

export default InquilinoItem;
