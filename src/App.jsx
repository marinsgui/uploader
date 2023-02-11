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
        <input type="file" onChange={handleChange} />
      </form>
      <div>
          {files.map((file, index) => (
            <div key={index}>
              <div>{file.name}</div>
              <button onClick={() => handleDownload(index)}>Download</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App
