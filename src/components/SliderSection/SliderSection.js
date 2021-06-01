import React, {useState} from 'react'

import useWindowDimensions from '../../getWindow'
import SizeSlider from '../SizeSlider/SizeSlider'
import Board from '../Board/Board'

import './SliderSection.css'

export default function SliderSection(props) {
    const { height, width } = useWindowDimensions();
  
    const heightOrWidth = (height, width) =>{
        if(height < width){
          return height
        } else {
          return width
        }
    }
  
    const [value, setValue] = useState(heightOrWidth(height, width)*0.50)
  
    const handleWidth = (event, newValue) =>{
         setValue(newValue)
    }
    return (
        <div className="sliderSection">
            <h2>Choose your size: </h2>
          
            <SizeSlider
            defaultValue={value}
            value={value}
            aria-labelledby="discrete-slider-small-steps"
            step={25}
            marks
            min={Math.round(width/6)}
            max={heightOrWidth(height,width)-Math.round(width/6)}
            onChange={handleWidth}
            valueLabelDisplay="auto" />
            <Board width={value} squareWidth={value/8} squares={props.squares}/>
      
        </div>
    )
}
