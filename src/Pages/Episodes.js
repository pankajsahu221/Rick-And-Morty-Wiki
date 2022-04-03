import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);

      console.log(response);
      setInfo(response.data);

      let a = await Promise.all(
        response.data.characters.map(x => {
          //used fetch instead of axios bcoz i had to store the data value inside the api call object
          return fetch(x).then(res => res.json());
        })
      );
      setResults(a);
    };

    fetchData();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4"> Pick Episodes</h4>
          <InputGroup name="Episode" total={51} setId={setId} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
