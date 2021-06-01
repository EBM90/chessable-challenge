import React from 'react'

import Header from './components/Header/Header'
import ButtonSection from './components/ButtonSection/ButtonSection'
import SliderSection from './components/SliderSection/SliderSection'
import AddCart from './components/AddCart/AddCart'

import './App.css'

//Eric: the commented code was my attempt to get all the square in one single function
//It works but only after the slider is used. It doesn't look nice but for
// the life of me I could not find how to fix this bug. So I 
//used this less DRY way but at least it renders with the rest of the page

export default function App() {
  // const [allSquares, setallSquares] = useState([])
    

  //   useEffect(() => {
  //                   for(let i = 1; i<= 64; i++){
  //                       if(i <= 8 && i % 2 === 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 8 && i <= 16) && i % 2 !== 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 16 && i <= 24) && i % 2 === 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 24 && i <= 32) && i % 2 !== 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 32 && i <= 40) && i % 2 === 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 40 && i <= 48) && i % 2 !== 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 48 && i <= 56) && i % 2 === 0){
  //                           allSquares.push('light')
  //                       } else if ( (i > 56 && i <= 64) && i % 2 !== 0){
  //                           allSquares.push('light')
  //                       } else {
  //                           allSquares.push('dark')
  //                       }
  //                   }
  //               }, [])
    return (
      <>
      <Header/>
      <div className='main'>
        <h1>Buy your chessaboard here!</h1>
        <div className="chooseSection">
          <ButtonSection />
          <SliderSection /> 
          {/* In the SliderSection, we would pass the allSquares state as props */}
        </div>
        <AddCart />
      </div>
      </>
    )
  }
