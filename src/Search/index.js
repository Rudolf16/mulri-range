import React, { useEffect, useState } from 'react'

export default function Search( {min=0,max=100,onChange,data}) {
  const [first,setFirst]=useState(0);
  const [width,setWidth]=useState("")
  const [inputWidth,setInputWidth]=useState("")
  const [second,setSecond]=useState(width)
  const [globalWidth,setGlobalWidth]=useState()
  const [thumbOne,setThumbOne]=useState("")
  const [thumbTwo,setThumbTwo]=useState("")
  const [vizOne,setVizOne]=useState(2)
  const [vizTwo,setVizTwo]=useState(2)
  const [value,setValue]=useState(0)

  if(data){
    max=data.length-1;
    min=0
  }

  useEffect(()=>{
    if(data)onChange(data[value])
   else onChange(value);
  },[value])

useEffect(()=>{
  let container=document.getElementsByClassName("container")
  const mainWidth=container[0].clientWidth
  setWidth(mainWidth)
  setInputWidth(second-first)
  setGlobalWidth(window.innerWidth)
  setThumbOne(document.getElementsByClassName("first"))
  setThumbTwo(document.getElementsByClassName("second"))
})

useEffect(()=>{
  setSecond(width)
},[width])


const move=(e)=>{
  setVizOne(3)
  setVizTwo(2)
  e.target.style.cursor="grab";
  const a=e.target.parentNode.offsetLeft
    if(e.pageX-a<second){
      if(e.pageX-a<0){
        setFirst(0)
      }
      else setFirst(e.pageX-a)
    }
       
    else{
      setFirst(second)
    }
}

const move2=(e)=>{
  setVizOne(2)
  setVizTwo(3)
  e.target.style.cursor="grab";
  const a=e.target.parentNode.offsetLeft
    if(e.pageX-a>=first&&e.pageX-a<=width){
      setSecond(e.pageX-a)
    }
    

  }
  const testMove=(e)=>{
    const a=e.target.parentNode.offsetLeft
    if(e.pageX-a<second){
      if(e.pageX-a<0){
        setFirst(0)
      }
      else setFirst(e.pageX-a)
    }
       
    else{
      setFirst(second)
    }
  }


  const anothertest=(e,concl)=>{
    document.getElementsByClassName("container")[0].style.position="static"
    if(concl){
      document.getElementsByClassName("container")[0].style.position="relative"
    }
    if(e.screenX<second){
      setFirst(e.screenX)
    }else{
      setFirst(second)
    }
  }


  useEffect(()=>{
    const range=max-min;
    const procent=inputWidth/(width/100);
    const rangeProcent=(range/100)
    const current=min+rangeProcent*procent
     setValue(Math.ceil(current))

    // const procent=inputWidth/(width/max);
    // setValue(Math.ceil(procent))

},[move,move2])

  return (
    <>
    
    <div  className="container" onClick={(e)=>console.log(e)}>
      <div style={{left:first,zIndex:vizOne}} draggable="true" className="first"  onDragEnd={(e)=>move(e)} onDrag={(e)=>move(e)}></div>
      <div style={{width:inputWidth, left:first}} className="input"></div>
      <div style={{left:second,zIndex:vizTwo}} draggable="true" onDragEnd={(e)=>move2(e)} onDrag={(e)=>move2(e)} className="second"></div>
    </div>
    </>
  );
}



// max={second} min={0}  onChange={(e)=>setFirst(e.target.value)}
// 