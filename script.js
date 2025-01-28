// Sample job data
const jobs = [
    { title: "Software Engineer", category: "it", type: "non-voice" },
    { title: "Customer Support", category: "non-it", type: "voice" },
    { title: "Data Analyst", category: "it", type: "non-voice" },
    { title: "Telemarketer", category: "non-it", type: "voice" },
  ];
  
  // DOM Elements
  const jobSearchForm = document.getElementById("jobSearchForm");
  const jobResults = document.getElementById("jobResults");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  const closeButtons = document.querySelectorAll(".close");
  
  // Display jobs
  function displayJobs(filteredJobs) {
    jobResults.innerHTML = "";
    filteredJobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.className = "job-card";
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p>Category: ${job.category}</p>
        <p>Type: ${job.type}</p>
      `;
      jobResults.appendChild(jobCard);
    });
  }
  
  // Search jobs
  jobSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById("jobSearch").value.toLowerCase();
    const category = document.getElementById("jobCategory").value;
  
    const filteredJobs = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm);
      const matchesCategory = category === "all" || job.category === category;
      return matchesSearch && matchesCategory;
    });
  
    displayJobs(filteredJobs);
  });
  
  // Modals
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
  });
  
  registerBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
  });
  
  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
    });
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === loginModal || e.target === registerModal) {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
    }
  });
  
  // Initial display of all jobs
  displayJobs(jobs);