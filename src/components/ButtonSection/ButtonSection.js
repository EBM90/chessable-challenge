import React from 'react'
import Button from '../ButtonColor/ButtonColor'

import './ButtonSection.css'

export default function ButtonSection() {

    return (
        <>
        
        <div className="buttonSection">
            <h2>Choose your color:</h2>
            <div className="buttons">
            <Button className='color-button normal'
            accent='maroon'
            dark='brown'
            light='beige'
            text='Classic'
          />
          <Button className='color-button blue'
            accent='darkBlue'
            dark='blue'
            light='lightBlue'
            text="Blue"
          />
          <Button className='color-button black'
            accent='black'
            dark='dimgrey'
            light='white'
            text='Black'
          />
          <Button className='color-button green'
            accent='darkgreen'
            dark='green'
            light='greenyellow'
            text='Green'
          />
            </div>
        </div>
            
        </>
    )
}
