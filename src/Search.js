import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:8000/Adresses?q=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);
  
    return (
      <div className="app">
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
       
      </div>
    );
}

export default Search