import React ,{useState ,useEffect} from "react";
import Card from "./Card";
import State from "./State";
import "./App.css";



function App() {
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
  if(loading) return <p>Loading.........</p>
  
  console.log(data);
    
  
      
  return (
    
    <>
   
          <div className="container">
            <div className="row bg-img text-white">
              <div className="col-12  text-center">
                <h3 className="pt-4 pb-4 pos">Covid Tracker</h3>
    
                <p></p>
              </div>
            </div>
            <Card 
                active ={data.statewise[0].active}
                   confirmed = {data.statewise[0].confirmed}
                   deaths   = {data.statewise[0].deaths}
               lastupdatedtime  ={data.statewise[0].lastupdatedtime}
               recovered    ={data.statewise[0].recovered }
        
        
        
        />
        
      </div>
    

<State/>
    </>

  );
}

export default App;
