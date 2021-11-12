import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = () => {
      // fetch("charactersData.json", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   }
      // })

      fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          // console.log(myJson);
          setItems(myJson);
          setIsLoading(false);
        });
    };

    getData();
  }, [query]);

  const getQuery = value => {
    setQuery(value);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
