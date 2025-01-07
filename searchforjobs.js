import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {get,ref,getDatabase} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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
const analytics = getAnalytics(app);
const db = getDatabase(app);

function jobBlock(job,container){
    const jobBlock = document.createElement("div");
    jobBlock.classList.add("job-block");

    jobBlock.innerHTML = `
     <h2 class="job-title">${job.name}</h2>
      <p class="job-description">${job.description}</p>
      <div class="job-details">
          <p><strong>Salary:</strong>${job.salary}</p>
          <p><strong>Company:</strong>${job.company}</p>
          <p><strong>Status:</strong> <span id="status">${job.status}</span></p>
      </div>
    `;
    container.appendChild(jobBlock);
    const statusElement = jobBlock.querySelector("#status");
    if (job.status.toLowerCase() === 'open') {
        statusElement.style.color = 'green';
        statusElement.style.fontWeight = 'bold';
    } else if (job.status.toLowerCase() === 'closed') {
        statusElement.style.color = 'red';
        statusElement.style.fontWeight = 'bold';
    }

    jobBlock.addEventListener("click", () => {
        window.location.href = `job.html?company=${job.company}`;
    });
}

const jobsContainer = document.querySelector(".content");
async function fetchJobs(){
    const jobs = await get(ref(db,"jobs"));
    const snapshot = jobs.val();
    jobs.forEach(job => {
        let value = job.val();
        jobBlock(value,jobsContainer);
    });
}
fetchJobs();