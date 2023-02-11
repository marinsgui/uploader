import { useState } from 'react'
import './App.css'

function App() {
  const [files, setFiles] = useState([])
  
  function handleChange(e) {
    const selected = e.target.files[0]
    setFiles([...files, selected])
  }

  function handleDownload(index) {
    const file = files[index]
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
  }

  return (
    <div className="App">
      <form>
        <h1>Faça upload de seus arquivos</h1>
        <label className='file-input'>
          Selecione os arquivos
          <input type="file" onChange={handleChange} multiple />
        </label>
      </form>
      <ul className='file-list'>
          {files.map((file, index) => (
            <li key={index}>
              <p>{file.name}</p>
              <button onClick={() => handleDownload(index)}>Download</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
