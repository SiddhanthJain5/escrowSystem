
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


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
  const auth = getAuth();

const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
 
    const user = userCredential.user;
    console.log(user);
    window.alert("Creating Account...");
    window.location.href="index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
  }
}
});


const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.href="index.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
    });
});
