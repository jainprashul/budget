// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get, getDatabase, onValue, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt-oKQqe1RXWIUi6s5kHrTefw_5GFUx8A",
  authDomain: "budget-xp.firebaseapp.com",
  databaseURL: "https://budget-xp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "budget-xp",
  storageBucket: "budget-xp.appspot.com",
  messagingSenderId: "629170691135",
  appId: "1:629170691135:web:a99733514765ebbd55ac8a",
  measurementId: "G-SK32RGWWZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);

export const readDataListener = (path ,fn = (val)=> console.log(val)) => {
const dbRef = ref(database , path);
    return onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    fn(data);
})};

export const readData = async (path) => {
    const dbRef = ref(database , path);
    let snap = await get(dbRef);
    return snap
}

export const writeData = (path, data) => {
    const dbRef = ref(database, path);
    set(dbRef, data);
};






