import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);

      console.log(response);
      setInfo(response.data);

      let a = await Promise.all(
        response.data.residents.map(x => {
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
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type : {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4"> Pick Location</h4>
          <InputGroup name="Location" total={126} setId={setId} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
