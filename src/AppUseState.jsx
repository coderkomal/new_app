import React from 'react'
import "./App.css";
import {useState} from 'react'
import DragUseState from './DragUseState'
const AppUseState = () => {

   const [dropDepth, setDropDepth] = useState(0)
   const [inDropZone, setInDropZone] = useState(false)
   const [fileList, setFileList] = useState([])
   
   const setData = {
    setDropDepth:setDropDepth,
    setInDropZone:setInDropZone,
    setFileList:setFileList
   }

   const data = {
    dropDepth:dropDepth,
    inDropZone:inDropZone,
    fileList:fileList
   }

    return (
        <>
         <div className="App">
      <h1>React drag and drop component</h1>
      <DragUseState data={data} setData={setData} />

      <ol className="dropped-files">
        {fileList.map((f) => {
          return <li key={f.name}>{f.name}</li>;
        })}
      </ol>
    </div>
        </>
    )
}

export default AppUseState;
