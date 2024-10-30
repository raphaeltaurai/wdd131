const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

    // Toggle the 'aria-expanded' attribute for accessibility
    const isExpanded = hambutton.getAttribute('aria-expanded') === 'true' || false;
    hambutton.setAttribute('aria-expanded', !isExpanded);
});

// Job postings data
const jobPostings = [
    {
        jobTitle: "Sales Representative",
        location: "Aba, Nigeria",
        type: "hybrid",
        dailyHours: 9,
        imageUrl: "images/salesrep.webp"
    },
    {
        jobTitle: "Remote Web Developer",
        location: "Remote",
        type: "remote",
        dailyHours: 8,
        imageUrl: "images/remote-developer.webp"
    },
    {
        jobTitle: "On-site Technician",
        location: "New York, USA",
        type: "onsite",
        dailyHours: 5,
        imageUrl: "images/technician.webp"
    },
    {
        jobTitle: "Child Support Psychologist",
        location: "Harare, Zimbawe",
        type: "onsite",
        dailyHours: 8,
        imageUrl: "images/psychologist.webp"
    },
    {
        jobTitle: "Book Keeper",
        location: "Nairobi, Kenya",
        type: "hybrid",
        dailyHours: 4,
        imageUrl: "images/bookkeeper.webp"
    },
    {
        jobTitle: "Agronomist",
        location: "Mutare, Zimbabwe",
        type: "onsite",
        dailyHours: 5,
        imageUrl: "images/hot-culture.webp"
    },
    // Add more job objects as needed
];

// Selecting where to create the job posting cards
const postingsGrid = document.querySelector('.postings-grid');

// Looping through the job postings object
jobPostings.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    jobCard.innerHTML = `
    <h2>${job.jobTitle}</h2>
    <p>Location: ${job.location}</p>
    <p>Type: ${job.type}</p>
    <p>Hours per Day: ${job.dailyHours}</p>
    <img src="${job.imageUrl}" alt="${job.jobTitle}" loading="lazy">
    `;
    postingsGrid.appendChild(jobCard);
});

function clearPostingsGrid() {
    postingsGrid.innerHTML = '';
}

// Function to remove 'active' class from all nav links
function clearActiveLinks() {
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to display job postings (all or filtered)
function displayJobs(filteredJobs) {
    clearPostingsGrid(); // Clear the grid before appending new items

    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
        <h2>${job.jobTitle}</h2>
        <p>Location: ${job.location}</p>
        <p>Type: ${job.type}</p>
        <p>Hours per Day: ${job.dailyHours}</p>
        <img src="${job.imageUrl}" alt="${job.jobTitle}" loading="lazy">
        `;
        postingsGrid.appendChild(jobCard);
    });
}

// Filter functions
const fullTimeJobs = jobPostings.filter(job => job.dailyHours >= 8);
const partTimeJobs = jobPostings.filter(job => job.dailyHours < 8);
const onsiteJobs = jobPostings.filter(job => job.type === 'onsite');
const remoteJobs = jobPostings.filter(job => job.type === 'remote');
const hybridJobs = jobPostings.filter(job => job.type === 'hybrid');

// Display all jobs initially
displayJobs(jobPostings);

// Event listeners for navigation menu
document.querySelector('a[href="#Full-Time"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(fullTimeJobs);
});

document.querySelector('a[href="#Part-Time"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(partTimeJobs);
});

document.querySelector('a[href="#Onsite"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(onsiteJobs);
});

document.querySelector('a[href="#Remote"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(remoteJobs);
});

document.querySelector('a[href="#Hybrid"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(hybridJobs);
});

document.querySelector('a[href="project.html"]').addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveLinks();
    event.target.classList.add('active');
    displayJobs(jobPostings); // Display all jobs when "Home" is clicked
});

// JavaScript to populate the "Preferred Hours" select options
document.addEventListener('DOMContentLoaded', function() {
    const preferredHoursSelect = document.getElementById('preferredHours');
    const hoursOptions = ['Full-Time', 'Part-Time'];

    hoursOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        preferredHoursSelect.appendChild(optionElement);
    });
});