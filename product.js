import React, { useState } from 'react'
import Product from './product'
import "./Browse.css"
import { listItem } from './products'
import { FaShoppingCart } from "react-icons/fa";
import Popular from './popular';




const Browse = () => {
  // let Data=listItem.map((data)=>{
  //   return(<Product key={data.id}
  //   title={data.foodName}
  //   rating={data.rating}
  //   weight={data.weight}
  //   description={data.description}
  //   cost={data.cost}
  //   img={data.image}/>)
  // })
  let Data=listItem
  return (   
    <body>
     <Popular pdata={Data}/>
     <FaShoppingCart style={{color:"black",width:"30px",height:"30px"}}/>
      {/* {Data.map((res)=><Product r={res}/>)} */}
    </body>
  )
}


export default Browse
