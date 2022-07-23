import './App.css';
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {

const [personajes, setPersonajes] = useState([]);
const [info, setInfo] = useState({});

const initialUrl = "https://rickandmortyapi.com/api/character"

const fetchCharacters = (url) => {
  fetch(url)
.then((response) => response.json())
.then((data) => {
  setPersonajes(data.results);
  setInfo(data.info);
  console.log(data)
})
.catch((error) => error)
}

const onPrevious = () => {
fetchCharacters(info.prev);
}

const onNext = () => {
fetchCharacters(info.next)
}

useEffect(() => {
  fetchCharacters(initialUrl);
}, []);

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <Pagination
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious} 
       onNext={onNext}
       />
      <Characters personajes={personajes} />
      <Pagination
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious} 
       onNext={onNext}
       />
    </div>
    </>
    
  );
}

export default App;
