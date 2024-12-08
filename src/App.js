import { Card, Col, Container, Row } from 'reactstrap';
import './App.css';
import { LINKS } from './videoLinks';

function videoFrame(link){
  return(
    <Col>
      <Card style={{width: "5rem;"}}>
          {/* <div className='embed-responsive'> */}
            <iframe className='embed-responsive-item card-img-top' src={link} allowFullScreen></iframe>
          {/* </div> */}
      </Card>
    </Col>
  )
}

function App() {
  return (
    <Container>
      <Row>
        {LINKS.map(link => videoFrame(link))}
      </Row>
    </Container>
  );
}

export default App;
