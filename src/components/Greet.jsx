// This is an example of a function based Component.

import React from "react";


// Normal function method:
// function Greet() {
//     return (
//         <h1>Hello Ghareebon</h1>
//     )
// }

// Fat Arrow  Function method:
// we are going to use this method throughout:
const Greet = () => {
    return (
        <h1>
            Hello Ghareeboun
        </h1>
    )
}




export default Greet

// Using default allows us to change the name and call it whatever we want at the place where we are going to import the function


// We can also export the function directly but we wont have an option to use any name when importing it in another components

// export const Unchanged = () => {
//     return <h3>This is a function</h3>
// }