import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Set up our config for Firebase
// Define these in your env file, the values can be found in the project settings page on Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



// Get all the jobs from the Jobs table
export async function getAllTasks() {
    const data = await getDocs(collection(db, "Jobs"));
    data.docs.map((doc) => {
        console.log(doc.id)
        console.log(doc.data())
    });
}