import React, { useEffect, useState } from "react";
import InquilinoService from "../service/inquilino-service";

const InquilinoContext = React.createContext();

export const InquilinoProvider = ({
    children
}) => {
    const [inquilinos, setInquilinos] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const loadInquilinos = async () =>{
        const result = await InquilinoService.getAllInquilinos();
        setInquilinos(InquilinoService.parseDtoToInquilinos(result.data))
    }

    useEffect(() => {
        loadInquilinos()
            .catch((error) =>{
                console.error(error);
            }).finally(()=>{
                setLoaded(true);
            })
    },[])

    return (
        <InquilinoContext.Provider value={{
            inquilinos,
            isLoaded
            }}>
            {children}
        </InquilinoContext.Provider>
    )
}

export const useInquilino = () => {
    const context = React.useContext(InquilinoContext);
    if (!context) {
        throw new Error('useInquilino debe estar dentro del proveedor InquilinoContext');
    }
    return context;
}