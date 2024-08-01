import { initializeApp } from 'firebase/app'

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
  query,
  where,
  addDoc,
  setDoc,
  Timestamp
} from 'firebase/firestore'

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
export const db = getFirestore(app)

// Get all the jobs from the Jobs table
// export async function getAllTasks() {
//     const data = await getDocs(collection(db, "Jobs"));
//     data.docs.map((doc) => {
//         console.log(doc.id)
//         console.log(doc.data())
//     });
// }

export async function getAllTasks() {
  const data = await getDocs(collection(db, 'Jobs'))
  const tasks = data.docs.map(doc => {
    console.log(doc.data().title)
    return { id: doc.id, ...doc.data() }
  })
  return tasks
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

// Edit user data
export async function editUserData(
  userID: string,
  newData: Record<string, any>
) {
  const userRef = doc(db, 'Users', userID)
  try {
    await updateDoc(userRef, newData)
    console.log('User data updated successfully')
  } catch (error) {
    console.error('Error updating user data: ', error)
  }
}

// Get all jobs applied to by a specific user
export async function getUserJobs(userId: string): Promise<string[]> {
  const userJobsRef = collection(db, 'userJobsApplied')
  const userJobsQuery = query(userJobsRef, where('userId', '==', userId))
  const userJobsSnapshot = await getDocs(userJobsQuery)

  // Get the job info using the retrieved jobId
  const jobInfoPromises = userJobsSnapshot.docs.map(async docSnap => {
    const jobId = docSnap.data().jobId
    const jobRef = doc(db, 'Jobs', jobId)
    const jobDoc = await getDoc(jobRef)
    if (jobDoc.exists()) {
      return { id: jobDoc.id, ...jobDoc.data() } // Return the entire job data
    } else {
      console.error(`Job with ID ${jobId} not found`)
      return null
    }
  })

  const jobInfos = await Promise.all(jobInfoPromises)
  // console.log(`Job information: ${jobInfos}`); // Debug log
  return jobInfos.filter(info => info !== null)
}

export async function submitUserForJob(
  userId: string,
  jobId: string,
  questionAnswers: string[]
) {
  try {
    const docRef = await addDoc(collection(db, 'userJobsApplied'), {
      userId: userId,
      jobId: jobId,
      questionAnswers: questionAnswers
    })
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export async function createNewJob(
  userID: string,
  title: string,
  description: string,
  jobSkills: string[],
  header: string,
  thumbnail: string,
  jobDuration: number,
  questions: string[]
) {
  if (!userID || !title) {
    console.error('User ID and title are required to create a new job')
    return
  }


  try {
    const newJob = {
      userID: userID,
      title: title,
      description: description,
      jobSkills: jobSkills,
      status: 0,
      header: header,
      thumbnail: thumbnail,
      jobDuration: jobDuration,
      questions: questions
    }

    const docRef = await addDoc(collection(db, 'Jobs'), newJob)

    console.log('Document written with ID: ', docRef.id) // Debug log
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
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
