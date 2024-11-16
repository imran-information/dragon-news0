// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeqM_uHz08_poR-4MORZRqnxlMUziI_ak",
    authDomain: "dragon-news-8031d.firebaseapp.com",
    projectId: "dragon-news-8031d",
    storageBucket: "dragon-news-8031d.firebasestorage.app",
    messagingSenderId: "1015864586132",
    appId: "1:1015864586132:web:805a88b4023f15d44da981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)