import React from "react";

// class Product extends React.Component{

//     render(){
//         return(
//             <div id="pro" className="product-show">
//             <h2>Title Product : {props.title}</h2>
//             <p>Description Product : {props.des}</p>
//             <p>{props.children}</p>
//         </div>
//         )
//     }
// }

const Product = (props)=>{
    return(
        <div id="pro" className="product-show">
            <h2>Title Product : {props.title}</h2>
            <p>Description Product : {props.des}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Product