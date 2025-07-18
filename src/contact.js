
 document.getElementById("craftedForm").addEventListener("submit", function (e) {
  
  // Show success toast (optional)
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");

  // Reset form
  document.getElementById("craftedForm").reset();

  // Hide toast after 4 seconds
  setTimeout(() => toast.classList.add("hidden"), 4000);
});
