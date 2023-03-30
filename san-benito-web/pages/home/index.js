import { Container, Row, Col } from 'react-bootstrap';
import DescripcionCop from '../../components/home/DescripcionCop';
import Navegacion from '../../components/home/Navegacion';
import styles from './home.module.scss'

function Home() {
  return (
    <>
      <Container fluid className={styles.Cuerpo}>
        <Row>
          <Col className={styles.col}><Navegacion></Navegacion></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={7} className={styles.col}><DescripcionCop></DescripcionCop></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;