import React, { Component , useState } from "react"
import Product from "./component/Product"



//function component
const App = (props) =>{
    const [stateComponent , updatestate] = useState(
        {
            product : [
                {title:'book1' , price: 456},
                {title:'book2' , price: 654},
                {title:'book3' , price: 4898}
            ]
        }
    )

    const cheangePrice = ()=>{
        updatestate(
            {
                product : [
                    {title:'book5' , price: 454564566},
                    {title:'book6' , price: 6545644},
                    {title:'book7' , price: 6574864898}
                ]
            }
        )
    }

        return (
        <div id="main" className="div-hello">
            <h2>React App</h2>
            <p>Hello word</p>
            <hr></hr>
            <Product 
             title={stateComponent.product[0].title}
              des={stateComponent.product[0].price}
            />

            <Product 
             title={stateComponent.product[1].title}
              des={stateComponent.product[1].price}
            />

            <Product 
             title={stateComponent.product[2].title}
              des={stateComponent.product[2].price}
            />
            <button onClick={cheangePrice}>Chane Price</button>
        </div>
    )
}



//class Component
// class App extends React.Component{

//     state = {
//         product : [
//             {title:'book1' , price: 456},
//             {title:'book2' , price: 654},
//             {title:'book3' , price: 4898}
//         ]
//     }


//     cheangePrice = ()=>{
//         console.log('clicked!');
//         this.setState({
//                 product : [
//                     {title:'book5' , price: 454564566},
//                     {title:'book6' , price: 6545644},
//                     {title:'book7' , price: 6574864898}
//                 ]
//             })

//     }
//     render(){
//     return (
//         <div id="main" className="div-hello">
//             <h2>React App</h2>
//             <p>Hello word</p>
//             <hr></hr>
//             <Product 
//              title={this.state.product[0].title}
//               des={this.state.product[0].price}
//             />

//             <Product 
//              title={this.state.product[1].title}
//               des={this.state.product[1].price}
//             />

//             <Product 
//              title={this.state.product[2].title}
//               des={this.state.product[2].price}
//             />
//             <button onClick={this.cheangePrice}>Chane Price</button>
//         </div>
//     )
//     }
// }


// function Component 
// const App = () => {
//     return (
//         <div id="main" className="div-hello">
//             <h2>React App</h2>
//             <p>Hello word</p>
//             <hr></hr>
//             <Product/>
//         </div>
//     )
// }

export default App