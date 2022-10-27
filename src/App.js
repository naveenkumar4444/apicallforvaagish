import './App.css';

import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=PMI7WV5AQ1GAA3KN")
      .then((res) => {
        setData(res.data["Time Series (5min)"])
      }).catch((e) => {
        alert(e)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <th>DateTime</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
          {Object.keys(data).map((obj, key) => (
            <tr key={key}>
              <td>{obj}</td>
              <td>{data[obj]["1. open"]}</td>
              <td>{data[obj]["2. high"]}</td>
              <td>{data[obj]["3. low"]}</td>
              <td>{data[obj]["4. close"]}</td>
              <td>{data[obj]["5. volume"]}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
