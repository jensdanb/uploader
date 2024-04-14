import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountButton from './components/CountButton.jsx'
import DragDropFile from './components/DragDropFile.jsx'

function App(props) {

  function uploadFiles(files) {
    var formData = new FormData();

    console.log(files[0])
    formData.append('image', files[0])
    console.log(formData)

    const url = 'https://demo.api4ai.cloud/ocr/v1/results'
    fetch(url, {
      // content-type header should not be specified!
      method: 'POST',
      body: formData,
      headers: { 'A4A-CLIENT-APP-ID': 'sample' }
    })
      .then(response => response.json())
      .then(function (response) {
        const text = response.results[0].entities[0].objects[0].entities[0].text
        console.log(text)
      })
      .catch(error => console.log(error)
    );
  }

  return (
    <>
      {logoes}
      <h1>Vite + React</h1>
      {CountButton()}
      <DragDropFile
        uploadFiles={uploadFiles}
      />
      {bottomText}
    </>
  )
}

const logoes =
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>

const bottomText =
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>

export default App
