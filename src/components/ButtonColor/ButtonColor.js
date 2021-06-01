import React from 'react'

export default function ButtonColor(props) {

    const changeColor =(accentColor, darkColor, lightColor)=>{
        document.documentElement.style.setProperty('--clr-accent', accentColor);
        document.documentElement.style.setProperty('--clr-dark', darkColor);
        document.documentElement.style.setProperty('--clr-light', lightColor);
    }
    return (
        <button className={props.className} onClick={() => changeColor(props.accent, props.dark, props.light) }>
            {props.text}
        </button>
    )
}
