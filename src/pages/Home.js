

import React, { useState, useEffect } from 'react'
import Counter from '../components/counter'
import './Home.css'


// Functional Components
// 1. Smaller Component
// 2. Usually Presentational Component
// 3. In most cases reusable components
// 4. Focus on one responsibility

// const Home = () =>{

//     const [ message, setMessage ] = useState('Super Super Message');
//     const [ count, setCount ] = useState(0);
//     const [test, setTest] = useState(0);


//     // Its called after comonenet is initialize and when componenet is Updated!!!
//     // Side effect
//     useEffect(() =>{ 
//         setTimeout(() =>{
//             alert(test)
//         }, 1000)
//     },)

//     const increment = () =>{
//         // setTest(test + 1)
//         setCount(count + 1);
//     }

//     const decrement = () =>{
//         setCount(count - 1)
//     }

//     return (
//         <div className="container">
//             <h1>I am Home Page</h1>
//             <p> { message }</p>
//             <button onClick={increment}>Increment</button>
//             <div className="counter">{ count }</div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }


// Class Component
// 1. Larger components, container components
// 2. Easier to handle lots of state
// 3. More boilerplate
// 4. Access to lifecycle functions

class Home extends React.Component {

    state = {
        message: "I am just a message"
    }
    


    // Lifecycle function
    componentDidMount() {
        setTimeout(()=>{
            this.setState({message: 'I am updated Message'});
        }, 1000)
    }

    displayMessage = (type, count) =>{
        // if(type === "increment"){
        //     alert(`Your number was Incremented`)
        //     return
        // }
        alert(`Your number was ${type}! Current value: ${type == 'increment' ? count + 1 : count - 1}`)

    }

    

    // lifecycle function
    render(){ 
        const { message  } = this.state
        return (
            <div className="container">
                <h1>I am Home Page</h1>
                <p> { message }</p>
                <Counter 
                onChange = {this.displayMessage}
                title="I am counter Component" />
            </div>
        )
    }

}




export default Home