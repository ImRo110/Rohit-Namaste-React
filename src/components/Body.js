import React, { useState, useEffect } from "react";

const Body = () => {
  const [searchResult, setSearchResult] = useState("");
  console.log("Body Rendered");
  return (
    <div>
      {/* <input
        type="text"
        value={searchResult}
        className="custom-search"
        onChange={(e) => {
          setSearchResult(e.target.value);
        }}
      /> */}
      This is body component
    </div>
  );
};

export default Body;
