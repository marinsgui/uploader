import { useState } from "react";

import styled from "styled-components";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "./firebase/firebaseConnection";

import { MdCloudUpload } from "react-icons/md";

import { FaTrash } from "react-icons/fa";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #69b3f8;
`;

const Wrapper = styled.div`
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 90%;
  height: 90%;
  padding: 1rem;
  border: 2px dashed #69b3f8;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;

const Input = styled.input`
  display: none;
`;

const ItemsList = styled.ul`
  background-color: #b7dcff;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  list-style: none;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  function handleUpload(e) {
    e.preventDefault();

    const file = e.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => alert(error),
      () =>
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setUrl(downloadURL)
        )
    );
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <Label>
            <MdCloudUpload size={70} color="#1E77CC" /> Selecione os arquivos
            <Input type="file" onChange={handleUpload} multiple />
          </Label>
        </Form>

        <ItemsList>
          {!url && (
            <ListItem>
              Nenhum arquivo selecionado.
              <FaTrash />
            </ListItem>
          )}

          {url && <ListItem>{url.name}</ListItem>}
        </ItemsList>
      </Wrapper>
    </Container>
  );
}

export default App;
