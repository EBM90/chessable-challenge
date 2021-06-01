import React from 'react'

import LightSquare from '../Squares/LightSquare'
import DarkSquare from '../Squares/DarkSquare'

export default function EvenRow(props) {

    return (
        <>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare  squareWidth={props.squareWidth}/>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare  squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
            </>
    )
}

