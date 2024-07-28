import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc, query, where } from "firebase/firestore";
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

// Get user info for the user who created a job given the job ID
export async function getUserDataForSpecificTask(jobID: string) {
    const jobRef = doc(db, "Jobs", jobID);
    const jobDoc = await getDoc(jobRef);

    const userID = jobDoc.data().userId;
    const userRef = doc(db, "Users", userID);
    const userDoc = await getDoc(userRef);

    console.log(userDoc.data());
}

export async function createNewJob(userID: string, title: string, description: string, jobSkills: string[]) {
    try {
        const newJob = {
            userID: userID,
            title: title,
            description: description,
            jobSkills: jobSkills,
            createdAt: new Date()
        };
        
        const docRef = await addDoc(collection(db, "Jobs"), newJob);
        const returnedJob = await getDoc(docRef);

        if (returnedJob.exists()) {
            console.log("Job created with ID: ", docRef.id);
            return { id: docRef.id, ...returnedJob.data() };
        } else {
            throw new Error("No such document!");
        } } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}

// Get user info for a specific user
export async function getUserData(userID: string) {
    const userRef = doc(db, "Users", userID);
    const userDoc = await getDoc(userRef);

    console.log(userDoc.data());
}

// Edit user data
export async function editUserData(userID: string, newData: Record<string, any>) {
    const userRef = doc(db, "Users", userID);
    try {
        await updateDoc(userRef, newData);
        console.log("User data updated successfully");
    } catch (error) {
        console.error("Error updating user data: ", error);
    }
}
// Get all jobs applied to by a specific user
export async function getUserJobs(userId: string): Promise<string[]> {
  const userJobsRef = collection(db, "userJobsApplied");
  const userJobsQuery = query(userJobsRef, where("userId", "==", userId));
  const userJobsSnapshot = await getDocs(userJobsQuery);

  // Get the job info using the retrieved jobId
  const jobInfoPromises = userJobsSnapshot.docs.map(async (docSnap) => {
    const jobId = docSnap.data().jobId;
    const jobRef = doc(db, "Jobs", jobId);
    const jobDoc = await getDoc(jobRef);
    if (jobDoc.exists()) {
      return { id: jobDoc.id, ...jobDoc.data() }; // Return the entire job data
    } else {
      console.error(`Job with ID ${jobId} not found`);
      return null;
    }
  });

  const jobInfos = await Promise.all(jobInfoPromises);
  // console.log(`Job information: ${jobInfos}`); // Debug log
  return jobInfos.filter(info => info !== null);
}