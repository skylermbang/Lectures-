
import { useState, useEffect } from "react"
import { Button } from 'react-bootstrap';
const axios = require('axios').default;

function App() {

  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://18.220.172.238:3000/api/companies')
      .then((response) => response)
      .then((json) => {
        console.log(json.data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1> View All The Companies</h1>
      <Button> Click me</Button>
      <hr />
      {loading ? <h1> Loading...</h1> : null}
    </div >
  );
}

export default App;
