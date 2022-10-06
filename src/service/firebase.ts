import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDFv_go1svbVbf_-Gy4Li1eiSL_Go4Pd04",
  authDomain: "teamforbreak.firebaseapp.com",
  projectId: "teamforbreak",
  storageBucket: "teamforbreak.appspot.com",
  messagingSenderId: "30552712172",
  appId: "1:30552712172:web:b06599595aa3e7e4e3d6c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;