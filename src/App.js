import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

/*function App() {
  const [countries, setCountries] = useState(false)  // const toggle = false
*/
  function App() {
    const [countries, setCountries] = useState(null)
  
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setTimeout(() => setCountries(data), 1000))
    }, [])

 /*  if ( toggle === false) {
    setToggle(toggle => !toggle)
  } else {
    setToggle(toggle => !toggle)
  } */

  return (
    <div className="App">
      {countries ? <Countries countries={countries} /> : <p>loading...</p>}
    </div>
      
    /*{

      if (toggle) {
        return <p>The toggle is on</p>
      } else {
        return <p>The toggle is off</p>
      }

    }*/
  
  );
}

export default App;
