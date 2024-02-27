import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


import "./App.css"
import searchImg from "./assets/search.png"

import { useRef, useState } from "react"
import Weather from "./components/Weather"

function App() {
  let API_KEY = null

  let inputDataTaker = useRef()
  let location
  let [result, setResult] = useState({})



  function formHandler(event) {
    event.preventDefault()

    if (inputDataTaker.current.value.length != "" && API_KEY != null) {
      location = inputDataTaker.current.value


      if (location != null) {
        let path = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        fetch(path)
          .then(response =>response.json())
          .then(data => setResult(data))
          .catch(error => error)
      }
      document.getElementsByTagName("input")[0].value = ""
    }


  }

  // console.log(result)
  return (
    <div className="my-container">

      <div className="form-container">
        <form onSubmit={formHandler}>
          <input type="text" ref={inputDataTaker} placeholder="location" />
          <button>
            <img src={searchImg} />
          </button>
        </form>
      </div>


      <Weather result={result}/>

    </div>
  )

}
export default App