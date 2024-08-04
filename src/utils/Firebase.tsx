import { initializeApp } from 'firebase/app'
import { toast } from 'react-toastify'

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

// Create user data (Function made by Michelle to create user info for design). Do not use in production.
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

// The status field on a Job stores whether the job is open, in progress, or completed.
// 0 = Open, 1 = In Progress, 2 = Completed
// Update the status of a job to in progress (status = 1)
export async function setJobToInProgress(jobID: string) {
  try {
    const jobRef = doc(db, 'Jobs', jobID)
    await updateDoc(jobRef, { status: 1 })

    console.log('Job status updated to in progress')
    return { message: 'Job status updated to in progress' }
  } catch (error) {
    console.error('Error updating job status:', error)
    throw error
  }
}

// Create a Portfolio Project

export async function createNewProject(
  userID: string,
  title: string,
  thumbnail: string,
  description: string,
  url: string
): Promise<string | void> {
  if (!userID || !title) {
    console.error('User ID and title are required to create a new project')
    return
  }

  try {
    const newProject = {
      userID: userID,
      title: title,
      thumbnail: thumbnail,
      description: description,
      url: url
    }

    const docRef = await addDoc(collection(db, 'Projects'), newProject)

    console.log('Document written with ID: ', docRef.id) // Debug log
    return docRef.id
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage =
        'Failed to create Project. Status: ${error.name}. Message: ${error.message}'
      console.error(errorMessage)
      throw new Error(errorMessage)
    } else {
      const genericErrorMessage =
        'An unexpected error occurred while creating the project'
      console.error(genericErrorMessage)
      throw new Error(genericErrorMessage)
    }
  }
}

// Edit a Portfolio Project

export async function editProject(
  projectID: string,
  userId: string,
  title: string,
  thumbnail: string,
  description: string,
  url: string
) {
  if (!projectID || !userId || !title) {
    console.error(
      'Project ID, User ID, and title are required to edit a project'
    )
    return
  }
  try {
    const projectDocRef = doc(db, 'Projects', projectID)

    const updatedFields = {
      userId: userId,
      title: title,
      thumbnail: thumbnail,
      description: description,
      url: url
    }

    await updateDoc(projectDocRef, updatedFields)
    console.log('Project updated successfully')
    return updatedFields
  } catch (error) {
    console.error('Error updating project:', error)
    throw error
  }
}

// Get all projects by a specific user
export async function getAllProjectsByUserID(userID: string) {
  try {
    const projectsRef = collection(db, 'Projects')
    const q = query(projectsRef, where('userID', '==', userID))
    const querySnapshot = await getDocs(q)
    const projects = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}
export async function setJobToCompleted(jobID: string) {
  try {
    const jobRef = doc(db, 'Jobs', jobID)
    await updateDoc(jobRef, { status: 2 })

    console.log('Job status updated to completed')
    return { message: 'Job status updated to completed' }
  } catch (error) {
    console.error('Error updating job status:', error)
    throw error
  }
}