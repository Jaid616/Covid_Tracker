import React from 'react'
import "./Card.css"
function Card(props) {
 
  const margin ={
    marginTop: "30px",
    marginLeft: "30px",
    marginBottom: "30px",
    marginRight: "30px"

   }
   
  return (
    <>
     <div className="row justify-content-evenly" style={margin}>
          <div className="col-md-3 bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Country</h4>
      <p className='text-center '>India</p>
          </div>
          <div className="col-md-3  bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Active Case</h4>
      <p className='text-center '>{props.active}</p>
          </div>
          <div className="col-md-3  bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Total Case</h4>
      <p className='text-center'>{props.confirmed}</p>
          </div>
          </div>
          <div className="row justify-content-evenly" style={margin}>
          <div className="col-md-3 bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Total Death</h4>
      <p className='text-center'>{props.deaths}</p>
          </div>
          <div className="col-md-3  bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Last Time Update</h4>
      <p className='text-center'>{props.lastupdatedtime}</p>
          </div>
          <div className="col-md-3  bg-img text-white mt-3 pt-3 mx-3">
          <h4 className='text-center text-color'>Recovered</h4>
      <p className='text-center'>{props.recovered}</p>
          </div>
          </div>
      
    
    </>
  )
}

export  default Card
