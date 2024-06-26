import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((res) => res.json())
      .then((one) => {
        setData(one);
        setFilteredData(one);
      });
  }, []);

  return (
    <div> 
      <h1>WELCOME BACK </h1>

      <input
        type="search"
        className="search-input"
        placeholder="search here!"
        onChange={(e) => {
          const val = e.target.value.toLocaleLowerCase();

          const filter = data.filter((a) => {
            return a.firstname.toLocaleLowerCase().includes(val);
          });

          setFilteredData(filter);
        }}
      />
      <hr />
      <div className="card-list">
        {filteredData.map((value) => (
          <div className="container">
            <h2 className="content">{value.firstname}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
