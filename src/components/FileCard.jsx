import { FaDownload } from 'react-icons/fa'

export default function FileCard({ file, index, handleDownload }) {
    return (
        <li>
            <p>{file.name}</p>
            <button
                onClick={() => handleDownload(index)}
                className='download-btn'
                title='Download'
            >
                <FaDownload />
            </button>
        </li>
    )
}