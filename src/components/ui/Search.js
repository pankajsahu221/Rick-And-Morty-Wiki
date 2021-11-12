import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleChange = value => {
    setText(value);

    // for search operation
    getQuery(value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control searchinp"
          placeholder="Search characters"
          value={text}
          onChange={e => handleChange(e.target.value)}
          autoFocus
        ></input>
      </form>
    </section>
  );
};

export default Search;
