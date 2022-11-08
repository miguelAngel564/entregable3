import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import ResidentInfo from './coponetns/ResidentInfo'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  const [counts, setCounts] = useState({});
  const [red, setRed] = useState("");


  useEffect(() => {
    const randomm = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomm}`)
      .then(res => setCounts(res.data));
  }, [])

  const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${red}`)
      .then(res => setCounts(res.data));
  }


  console.log(counts);

  return (
    <div className="App">
      <div className='caja' >
         
<img className='imagenn' 
src="https://i.pinimg.com/originals/61/de/2b/61de2ba956418acd9ab454ceca15bbb2.jpg" 
alt="" />
  
        
        <div className='caja1 ' >
          <h1>Rick and Morty Wiki  </h1>
          <div className='containerInput text'>
            <input type="text" className='form-control inputBuscar'
              value={red}
              onChange={e => setRed(e.target.value)}
              placeholder='   type a location id' />
           

           
            <button onClick={search} className="btn btn-success">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <div className='div1'>
        <div className="text-1">
          <p><b>Name:</b> <br />{counts?.name}</p>
          <p><b>Type:</b> <br /> {counts?.type}</p>
          <p><b>Dimension: </b><br />{counts?.dimension}</p>
          <p><b>Population:</b> <br />{counts.residents?.length}</p>
        </div>
        <div className='item-1'>
          {
            counts.residents?.map(residents => (
              <ResidentInfo
                count={residents}
                key={residents}
              />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default App
