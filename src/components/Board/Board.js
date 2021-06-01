import React from 'react'

import EvenRow from '../Rows/EvenRow';
import OddRow from '../Rows/OddRow';

import './Board.css'

//Eric: In the commented section we see we get the array of light or dark
//and we map it so we get the squares we want 

export default function Board (props) {
        // const squares = props.squares

        return (
            <> 
            <div className='board' style={{width: props.width}}>
                <EvenRow squareWidth={props.squareWidth}/>
                <OddRow squareWidth={props.squareWidth}/>
                <EvenRow squareWidth={props.squareWidth}/>
                <OddRow squareWidth={props.squareWidth}/>
                <EvenRow squareWidth={props.squareWidth}/>
                <OddRow squareWidth={props.squareWidth}/>
                <EvenRow squareWidth={props.squareWidth}/>
                <OddRow squareWidth={props.squareWidth}/>
                {/* {squares.length !== 0 ? squares.map((square)=>{
                    return (<div style={{width: props.squareWidth, height: props.squareWidth}} className={square}>

                    </div>)
              }) : null} */}

            </div>
          
            </>
        )
    }
