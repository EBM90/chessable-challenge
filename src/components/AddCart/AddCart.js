import React from 'react'

import './AddCart.css'

export default function AddCart() {

    const mustLogIn = () =>{
        alert("Please log in to add item to the cart")
    }

    return (
        <button className="btn add" onClick={mustLogIn}>Add to cart</button>
    )
}
