import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    async function fetchin(){
      let catList = await fetch('http://localhost:8081/cats');
      let tempCat = await catList.json()
      setCats(tempCat)
      console.log("we got the cats")
      console.log(tempCat)
    }

    fetchin();
  }, [])

  return (
    <>
    <h1>Cat list</h1>
      {cats.map(cat => {
        return(
          <>
          <h2>{cat.name}</h2>
          <p><strong>{cat.breed}</strong></p>
          <p><em>{cat.color}</em></p>
          </>
        )
      })}
    </>
  )
}

export default App
