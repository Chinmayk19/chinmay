import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Heading from './components/Heading/Heading'
import Products from './components/Products/Products'

const App = () => {
  let arr=[{
    heading:"name 1",

  }]
  return (
    <div>
      <Navbar/>
      <Heading/>
      <div >
      {arr.map((ele)=>{
        return <Products heading={ele.heading} />
      })}
      </div>
    </div>
  )
}

export default App