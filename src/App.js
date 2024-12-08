import { Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import './App.css';
import { VIDEOS } from './videos';
import kidNationKid from './assets/kid-nation-kid.webp'

function videoCard(video){
  return(
    <Col xs="12" sm="6" lg="4" className='mb-5'>
      <Card className='h-100'>
        <iframe className='card-img-top' src={video.href} title={video.title} allowFullScreen></iframe>
        <CardBody>
          <CardTitle><b>S{video.season}E{video.episode} - {video.title}</b></CardTitle>
          <CardText>{video.description}</CardText>
        </CardBody>
        <CardFooter>
          <em>{video.length}</em>
        </CardFooter>
      </Card>
    </Col>
  )
}

function App() {
  return (
    <>
    <div className='container-fluid header'>
      <Row className='py-5'>
        <Col xs="4" className='mx-auto text-center'>
          <h1 className='site-title rye-regular'>Kid Nation Archive</h1>
        </Col>
      </Row>
      <Row className='pb-5'>
        <Col xs='12' className='mx-auto text-center'>
          <img className='kid-nation-kid' src={kidNationKid} alt='Kid Nation Jimmy'></img>
        </Col>
      </Row>
    </div>
    <Container>
      <Row>
        {VIDEOS.map(video => videoCard(video))}
      </Row>
    </Container>
    <div className='container-fluid'>
      <Row className='footer py-5'>
        <Col xs="4" className='mx-auto text-center'>
          <p>Website developed by Frank Smith with no affiliation to CBS, all credit goes to them for the content shown here.</p>
          <p><a href="https://www.youtube.com/watch?v=YuRYaTVSuhs&pp=ygUSam9udHJvbiBraWQgbmF0aW9u">Jontron Lolz</a></p>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default App;
