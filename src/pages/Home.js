

import React, { useState, useEffect } from 'react'
import './Home.css'


// Functional Components
// 1. Smaller Component
// 2. Usually Presentational Component
// 3. In most cases reusable components
// 4. Focus on one responsibility

const Home = () =>{

    const [ message, setMessage ] = useState('Super Super Message')
    // const messageState = useState('Super Super Message!!')
    // const message = messageState[0];
    // const setMessage = messageState[1];


    // Its called after comonenet is initialize and when componenet is Updated!!!
    // Side effect
    useEffect(() =>{
        setTimeout(() =>{
            setMessage('I am updated Message!####')
        }, 1000)
    }, [message, ])


    return (
        <div className="container">
            <h1>I am Home Page</h1>
            <p> { message }</p>
        </div>
    )
}


// Class Component
// 1. Larger components, container components
// 2. Easier to handle lots of state
// 3. More boilerplate
// 4. Access to lifecycle functions

// class Home extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             message: 'Super Message!!!!'
//         }
//     }
//     state = {
//         message: 'Super Message!!!!'
//     }


//     // Lifecycle function
//     componentDidMount() {
//         setTimeout(()=>{
//             this.setState({message: 'I am updated Message'});
//         }, 1000)
//     }

//     // lifecycle function
//     render(){ 
//         const { message } = this.state
//         return (
//             <div className="container">
//                 <h1>I am Home Page</h1>
//                 <p>{message}</p>
//             </div>
//         )
//     }

// }




export default Home