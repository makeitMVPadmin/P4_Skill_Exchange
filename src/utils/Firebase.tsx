import { initializeApp } from 'firebase/app'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc
} from 'firebase/firestore'
import { Skill } from '../interfaces/types'

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
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Get all the jobs from the Jobs table
export async function getAllTasks() {
  const data = await getDocs(collection(db, 'Jobs'))
  data.docs.map(doc => {
    console.log(doc.id)
    console.log(doc.data())
  })
}

// Get user info for the user who created a job given the job ID
export async function getUserDataForSpecificTask(jobID: string) {
  const jobRef = doc(db, 'Jobs', jobID)
  const jobDoc = await getDoc(jobRef)

  const userID = jobDoc.data().userId
  const userRef = doc(db, 'Users', userID)
  const userDoc = await getDoc(userRef)

  console.log(userDoc.data())
}

// Get user info for a specific user
export async function getUserData(userID: string) {
  try {
    const userRef = doc(db, 'Users', userID)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      console.log('User data:', userDoc.data())
      return userDoc.data()
    } else {
      console.log('No such user!')
      return null
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}

export async function setUserData(
  userID: string,
  userData: {
    firstName: string
    lastName: string
    tagline: string
    title: string
    bio: string
    github: string
    linkedin: string
    portfolioLink: string
    skills: Skill[]
  }
) {
  try {
    const userRef = doc(db, 'Users', userID)
    await setDoc(userRef, userData, { merge: true })

    console.log('User data updated successfully')
    return { message: 'User data updated successfully' }
  } catch (error) {
    console.error('Error updating user data:', error)
    throw error
  }
}
