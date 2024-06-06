import React, { useState } from 'react'
import Product from './product'
import "./Browse.css"
import {data} from "./data"


const Browse = () => {



  let data1=data;
  console.log(data1)

  return (

    <body>
     <Product 
     name={data[0].item.name}
     describe={data[0].item.describe}
     weight={data[0].item.weight}
     price={data[0].item.price}
     img={data[0].item.img}/>
     <Product
     name={data[1].item1.name}
     describe={data[1].item1.describe}
     weight={data[1].item1.weight}
     price={data[1].item1.price}
     img={data[1].item1.img}/>
     
     <Product
     name={data[2].item2.name}
     describe={data[2].item2.describe}
     weight={data[2].item2.weight}
     price={data[2].item2.price}
     img={data[2].item2.img}/>
     
     
   
    </body>
  )
}

export default Browse
