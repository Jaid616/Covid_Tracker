import React from 'react'


 function StateRow(props) {


  return (
    <>
      
       <tr>

      <td>{props.state}</td>
     <td>{props.active}</td>
      <td>{props.confirmed}</td>
    <td>{props.deaths}</td>
      <td>{props.recovered}</td>
      
    </tr>
      
        
    </>
    
  )
}
export default StateRow
