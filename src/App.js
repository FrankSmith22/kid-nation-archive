import './App.css';
import { LINKS } from './videoLinks';

function videoFrame(link){
  return(
    <iframe src={link} width="640" height="480" allow="autoplay"></iframe>
  )
}

function App() {
  return (
    <div>
      {LINKS.map(link => videoFrame(link))}
    </div>
  );
}

export default App;
