import React, { useEffect, useState } from 'react'
import Search from "./Search"
export default function App() {
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)
  const data=["spring","summer","winter"]
  return(
    <>  
        <Search style={{marginBottom:"20px"}} min={1} max={12} onChange={(target)=>setCount(target)}/>
        <Search data={data} onChange={(target)=>setCount2(target)}/>
       <div>{count}</div>
       <div>{count2}</div>
    </>
   
  )
}



// max={second} min={0}  onChange={(e)=>setFirst(e.target.value)}
// 