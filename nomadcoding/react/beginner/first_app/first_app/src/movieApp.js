
import { useState, useEffect } from "react"

function App() {

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState("")

  const onClick = (event) => setSearch(event.target.value)

  const submmit = (event) => {
    event.preventDefault()
    if (search === "") {
      return
    }
    setMovie(search)
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=48800ce0`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setMovie(json)
        setLoading(false)
      })
  }

  return (
    <div>
      <h1> Movie App</h1>
      {loading ? <h1> Loading ... </h1> : null}

      <input value={search} onChange={onClick} placeholder="Search your movie"></input>
      <button onClick={submmit}> Search</button>
      <hr />

      <ul>
        <li> {movie.Title}</li>
      </ul>
    </div >
  );
}

export default App;
