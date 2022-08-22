import React from "react";

import {Container,Row,Col} from "react-bootstrap"

import styles from './seccion.module.scss'

const Seccion =(props)=>{
    const isActive = props.isActive;
        if(isActive == "true"){
            return (
                    <Container fluid className={styles.seccionAct}>
                        <Row className={styles.filas} >
                
                            <Col md="auto" className={styles.columnas} >
                                <i className={props.image + " "+styles.iconActive}></i>
                            </Col>
                       
                        </Row>
                        <Row className={styles.filas}>
                            <Col md="auto" className={styles.columnas}>
                                <p className="tituloNav">{props.name}</p>
                            </Col>
                        </Row>
                    </Container>
            )
        }else{
            return(             
                    <Container fluid className={styles.seccionDes} >
                        <Row className={styles.filas}>
                           
                            <Col md="auto" className={styles.columnas} > 
                                <i className={props.image + " "+styles.icon} ></i>
                            </Col>
                            
                        </Row>
                        <Row className={styles.filas}>
                            <Col md="auto" className={styles.columnas} >
                                <p >{props.name}</p>
                            </Col>
                        </Row>
                    </Container>
            )          
        }   
}

export default Seccion;