
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBqDa_VQTdxBLVqRGUmHEemDPwutLPBovw",
  authDomain: "crafted-570df.firebaseapp.com",
  projectId: "crafted-570df",
  storageBucket: "crafted-570df.appspot.com", // correct version
  messagingSenderId: "286415951034",
  appId: "1:286415951034:web:29e1d2dbe435c6ee785e83",
  measurementId: "G-9TW30M38MC"
};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



document.getElementById("craftedForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate form fields
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    company: document.getElementById("company").value,
    projectType: document.getElementById("projectType").value,
    budget: document.getElementById("budget").value,
    timeline: document.getElementById("timeline").value,
    message: document.getElementById("message").value,
    subscribe: document.getElementById("subscribe").checked,
    submittedAt: new Date()
  };

  // Save to Firestore
  db.collection("crafted_submissions").add(formData)
    .then(() => {
      // Show success toast
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");

      // Reset form
      document.getElementById("craftedForm").reset();

      // Hide toast after 4 seconds
      setTimeout(() => toast.classList.add("hidden"), 4000);
    })
    .catch((error) => {
      console.error("Error saving form:", error);
      alert("Oops! Something went wrong. Please try again.");
    });
});


