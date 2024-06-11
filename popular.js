import React, { useState } from "react";
import Product from "./product";
import "./popular.css";
import { GiRoastChicken } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";

const Popular = ({ pdata }) => {
  // State to store filtered and mapped data
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter and map data
  const handleClick = () => {
    const pitem = pdata.filter((x) => x.category === "chick");
    const mappedData = pitem.map((res) => <Product r={res} />);
    setFilteredData(mappedData);
  };
  const handleClick1 = () => {
    const pitem = pdata.filter((x) => x.category === "mutton");
    const mappedData = pitem.map((res) => <Product r={res} />);
    setFilteredData(mappedData);
  };
  const handleClick2 = () => {                                                                                                                                                                                                                                                                             
    const pitem = pdata.filter((x) => x.category === "salad");
    const mappedData = pitem.map((res) => <Product r={res} />);
    setFilteredData(mappedData);
  };

  return (
    <div className="pop">
      <h1>Hot&spicy</h1>                                                                                                                                          
      {/* <button onClick={handleClick}>chicken</button> */}                              
      <GiRoastChicken onClick={handleClick} style={{width:"50px",height:"50px"}}/>       
      <GiGoat onClick={handleClick1} style={{width:"50px",height:"50px"}}/>
      <LuSalad onClick={handleClick2} style={{width:"50px",height:"50px"}}/>
      {filteredData}
      {/* Display filtered and mapped data */}
    </div>
  );
};
                                                                                                 
export default Popular;                                                                      
