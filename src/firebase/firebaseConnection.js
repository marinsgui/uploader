import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGKKDFxnWzeA3RSKomX4In6MMCG7QOj2Q",
  authDomain: "uploader-fa588.firebaseapp.com",
  projectId: "uploader-fa588",
  storageBucket: "uploader-fa588.appspot.com",
  messagingSenderId: "801531448679",
  appId: "1:801531448679:web:c32922e54e8bdff192b3c2"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)