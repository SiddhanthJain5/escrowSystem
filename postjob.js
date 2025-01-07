import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"; 
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyDXrqE-rcXGa9agBiuOdYtD9uG5v0giHT0",
    authDomain: "job-connect-c3a3f.firebaseapp.com",
    databaseURL: "https://job-connect-c3a3f-default-rtdb.firebaseio.com",
    projectId: "job-connect-c3a3f",
    storageBucket: "job-connect-c3a3f.firebasestorage.app",
    messagingSenderId: "550557592970",
    appId: "1:550557592970:web:987655e4a62b4824c32c73",
    measurementId: "G-C1MX4RBRM3"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

    const postJob = async () => {
      const companyName = document.getElementById("company").value;
      const postName = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      const salary = document.getElementById("salary").value;
      const experience = document.getElementById("experience").value;
      const skills = document.getElementById("skills").value;

      if (!companyName || !skills || !description || !salary || !experience || !postName) {
        alert("Please fill out all fields and upload an image.");
        return;
      }

      try {
        const jobData = {
          name: postName,
          description:Description,
          salary: salary,
          experience: experience,
          skills: skills,
          company: companyName,
          status: "open",
          };

          await set(ref(db, "jobs"), jobData);
          alert("Job Classes successfully!");
        }
         catch (error) {
        console.error("Error posting job:", error);
        alert("Failed to post job. Please try again.");
      }
    };
    
    document.getElementById("post-button").addEventListener("click", () => {
        postJob();
    });