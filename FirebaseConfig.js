
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwmPxkDi_8q7UM7TkdEf66-hJEv_aqKZg",
  authDomain: "finalproject-1293e.firebaseapp.com",
  projectId: "finalproject-1293e",
  storageBucket: "finalproject-1293e.appspot.com",
  messagingSenderId: "4231636625",
  appId: "1:4231636625:web:0b19450256bf14777c8130"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)