import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import './App.css';
import { VIDEOS } from './videos';

function videoCard(video){
  return(
    <Col xs="12" sm="6" lg="4" className='mb-5'>
      <Card className='h-100'>
        <iframe className='card-img-top' src={video.href} title={video.title} allowFullScreen></iframe>
        <CardBody>
          <CardTitle>S{video.season}E{video.episode} - {video.title}</CardTitle>
          <CardText>{video.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

function App() {
  return (
    <Container>
      <Row className='my-5'>
        <Col xs="4" className='mx-auto text-center'>
          <h1>Kid Nation Archive</h1>
        </Col>
      </Row>
      <Row>
        {VIDEOS.map(video => videoCard(video))}
      </Row>
    </Container>
  );
}

export default App;
