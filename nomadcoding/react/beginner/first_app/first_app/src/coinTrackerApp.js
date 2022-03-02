
import { useState, useEffect } from "react"

function App() {

  const [loading, setLoading] = useState(true)
  const [coin, setCoin] = useState([])



  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1 > Coin Tracker</h1>
      <h2> {coin.length}</h2>
      <ul>
        {coin.map((item) => <li key={item.id}> {item.name} | {item.symbol}| price : {item.quotes.USD.price} $ </li>)}
      </ul>

      {loading ? <strong>Loading...</strong> : null}
    </div >
  );
}

export default App;
