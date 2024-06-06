import React, { useState } from "react";
import "./product.css"


let Product=({name,describe,weight,price,img})=>{
    const [click,setClick]=useState(null)
    const [calc,setCalc]=useState(0)
    let count=()=>{
        setClick(click+1)
    }
    // useState(() => {
    //     setCalc(click * price);
    // }, [click, price]);

    return(
        <div className='product-full'>

        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="chick"/>
            </div>
            <div className='product-description'>
                <p className='pname'>{name}</p>
                <p>{describe}</p>
                <p className='pweight'>{weight}</p>
                <p className='price'>{price}</p>
               <p>currenvalue{calc}</p>
                <button className='Add-button'  onClick={count}>Add<span style={{marginLeft:"10px"}}>+{click}</span></button>
            </div>
        </div>
    </div>
    )
}
export default Product
