import React from "react";


// This is a JSX format to write code  in React


// const Hello = () => {
//     return (
//         <h1>This is a new h1 Element</h1>
//     )
// }



// This is a normal format to write code in React.


const Hello = () => {
    return (
        // React.createElement('div', null, 'This is a new h1 Element')
        // This is the method to create a div and store values init

        React.createElement('div', { id: "thisid", className: "thisclass" }, React.createElement('h1', null, 'This is a new h1 Element'))
        // This is the method to create a div and an h1 tag as children inside also instead of null it has some other props
    )
}

export default Hello