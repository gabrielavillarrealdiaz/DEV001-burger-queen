import { initializeApp } from "firebase/app";


// Import the functions you need from the SDKs you need
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMOipyN97FV8PcmXJx29KfHPGdm81mP9s",
  authDomain: "burgerqueen-13f48.firebaseapp.com",
  databaseURL: "https://burgerqueen-13f48-default-rtdb.firebaseio.com",
  projectId: "burgerqueen-13f48",
  storageBucket: "burgerqueen-13f48.appspot.com",
  messagingSenderId: "550101619749",
  appId: "1:550101619749:web:2031fc060ff609c8971bcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)



/* // Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}   */