import React from 'react'

import LightSquare from '../Squares/LightSquare'
import DarkSquare from '../Squares/DarkSquare'

export default function OddRow (props) {
    return (
            <>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare squareWidth={props.squareWidth}/>
                <DarkSquare squareWidth={props.squareWidth}/>
                <LightSquare  squareWidth={props.squareWidth}/>
            </>
    )
    
}
