
import { Container,Row,Col } from 'react-bootstrap';
import Navegacion from '../../components/Navegacion';
import DescripcionCop from '../../components/DescripcionCop';
import styles from './home.module.css'

function Home(){
    return (
        <div>
          <body>
             <Container fluid className={styles.Cuerpo}>
               <Row> 
                 <Col className={styles.col}><Navegacion></Navegacion></Col>
               </Row>
               <Row className= "justify-content-md-center">
                 <Col xs={7} className={styles.col}><DescripcionCop></DescripcionCop></Col>
               </Row>
             </Container>
          </body>
       </div>
    )
}

export default Home;