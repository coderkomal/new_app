import React from 'react';

const DragUseState = props => {

  const { dropDepth,inDropZone,fileList } = props.data;
  const {setDropDepth,setInDropZone,setFileList} = props.setData;

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    
    setDropDepth(dropDepth+1)
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    setDropDepth(dropDepth-1)
    setInDropZone(false)
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
   setInDropZone(true)
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = fileList.map(f => f.name)
      files = files.filter(f => !existingFiles.includes(f.name))
      setFileList(fileList.concat(files))
      setDropDepth(0)
      setInDropZone(false)
    }
  };

  return (
    <div className={inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
};

export default DragUseState;
