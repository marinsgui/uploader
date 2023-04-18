import { FaDownload } from "react-icons/fa";

import styled from "styled-components";

const ListItem = styled.li`
  border-top: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-weight: bold;
  }

  > button {
    padding: 12px;
    border-radius: 50%;
    border: none;
    background-color: #ededed;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #1010fe;
    }
  }
`;

export default function FileCard({ file, index, handleDownload }) {
  return (
    <ListItem>
      <p>{file.name}</p>
      <button
        onClick={() => handleDownload(index)}
        title="Download"
      >
        <FaDownload />
      </button>
    </ListItem>
  );
}
