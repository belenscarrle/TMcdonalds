// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxO6m-2DWOonXHK8AeBsf_hWRM_aA0mqc",
  authDomain: "tmcdonald-s.firebaseapp.com",
  databaseURL: "https://tmcdonald-s-default-rtdb.firebaseio.com",
  projectId: "tmcdonald-s",
  storageBucket: "tmcdonald-s.appspot.com",
  messagingSenderId: "1040755947957",
  appId: "1:1040755947957:web:50ef68cc5c1c43c89241fc",
  measurementId: "G-Y4S3BWGB6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getCities(app); // Agrega esta línea para obtener la instancia de Firestore

export { db };
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}