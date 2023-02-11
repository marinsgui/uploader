import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import './App.css'
import FileCard from './components/FileCard'

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
          Selecione os arquivos <FaUpload />
          <input type="file" onChange={handleChange} multiple />
        </label>
      </form>
      <ul className='file-list'>
          {files.map((file, index) => (
            <FileCard 
              file={file} 
              index={index} 
              key={index} 
              handleDownload={handleDownload} 
            />
          ))}
        </ul>
    </div>
  )
}

export default App
