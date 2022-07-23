import React ,{useState , useEffect} from 'react'
import StateRow from './StateRow'
// import App from './App'

function State(){
  const [ data,setdata ] = useState({});
  const [loading,setloading]= useState(true);
  useEffect(()=>{
    loaddata();
  },[]);
  
  const loaddata =async()=>{
  
    await fetch("https://data.covid19india.org/data.json")
    .then(response=>response.json())
    .then(datare=>{
      setdata(datare)
      setloading(false)
    });
  
  } 
  // let info =  data.statewise.reverse();
  console.log(data.statewise);
    
  // console.log(filterdata);
  if(loading) return <p>Loading.........</p>
  
  let filterdata = data.statewise.filter(f=>{
    return (f.state !== "Total" && f.confirmed !=="0") ;
 });
   console.log(filterdata);
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div class="table-responsive ">
   <table className="table table-responsive">
  <thead className="table color">
    <tr>
     
      <th scope="col">State</th>
      <th scope="col">Active </th>
      <th scope="col">Confirmed </th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
      
      
    </tr>
  </thead>
  <tbody className='bgcolor'>
      <StateRow/>
   
   
   
   {filterdata.map((e)=>{
      return(
        
    <StateRow
     state   = {e.state}    
     active  = {e.active}
     confirmed = {e.confirmed}
     deaths = {e.deaths}
     recovered   ={e.recovered}
     />
     
     
      ) 
      
  })
}


   


   

  </tbody>
</table>
</div>
        </div>
      </div>
    </div>
   
           
    
    
    </>
  )
  
}
  export default State

