import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "PDF"];

// UI Component
function DragDropFile(props) {
  const [files, setFiles] = useState(null);

  function handleChange(newFiles) {
    event.preventDefault();
    setFiles(newFiles);
    props.uploadFiles(Array.from(newFiles));
  };

  return (
    <FileUploader handleChange={handleChange} name="files" types={fileTypes} multiple={true} />
  );
}

export default DragDropFile;
