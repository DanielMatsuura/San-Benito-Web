import { useRouter } from "next/router";
import React from "react";


const InquilinoDetails =()=>{
    const router = useRouter();
    const {id} = router.query;
    //Falta mensaje de 404 en caso de que el inquilino id no exista
    return(
        <>
            <h1>Id inquilino = {id}</h1>
        </>
    )

}

export default InquilinoDetails