import React from "react";
import {Carousel} from 'react-bootstrap'
import Image from "next/image";
import edificio1 from '../images/edificio1.jpg'
import edificio2 from '../images/edificio2.jpg'
import edificio3 from '../images/edificio3.jpg'


const DescripcionCop = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    className="d-block w-85"
                    height={600}
                    
                    src={edificio2}
                    alt="First slide"
                    
                />
                <Carousel.Caption>
                    <h3>Residencia</h3>
                    <p>Estamos en la ciudad de Encarnación en el departamento de Itapuá</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-85"
                    height={600}
                    src={edificio1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Universitaria</h3>
                    <p>Ofrecemos nuestros servicios desde el año 2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-85"
                    height={600}
                    src={edificio3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>San Benito</h3>
                    <p>Siempre buscando las mejores comodidades para los estudiantes y trabajadores de la zona</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default DescripcionCop