// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // ESTO SE AGREGA PARA IMPORTAR FUNCION getFirestore


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qOU0O8fWkzXitSks4Adk65W3FkPVFF0",
  authDomain: "app-tienda-firebase.firebaseapp.com",
  projectId: "app-tienda-firebase",
  storageBucket: "app-tienda-firebase.appspot.com",
  messagingSenderId: "755944151622",
  appId: "1:755944151622:web:22dee1628a683d66508847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // ESTO ES PARA INICIAR LA APP

export const db = getFirestore(app); // ESTO ES PARA BUSCAR LA BASE DE DATOS DE LA APP INICIALIADA