const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
    // Toggle the 'aria-expanded' attribute for accessibility
    const isExpanded = hambutton.getAttribute('aria-expanded') === 'true' || false;
    hambutton.setAttribute('aria-expanded', !isExpanded);
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg, South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 19184,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 19-24",
        area:  44207,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-48073.jpg"
    },
    {
        templeName: "Durban, South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area:  19860,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936.jpg"
    },
    // Add more temple objects here...
  ];


  //selecting where to create the temple cards
const templesGrid = document.querySelector('.temples-grid');

//looping through the object
temples.forEach(temple => {
    //creating a new div for each temple
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p>Location:${temple.location}</p>
    <p>Dedicated:${temple.dedicated}</p>
    <p>Area:${temple.area} sq. ft.</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    templesGrid.appendChild(templeCard);
});

function clearTemplesGrid() {
  templesGrid.innerHTML = '';
}

// Function to remove 'active' class from all nav links
function clearActiveLinks() {
  const navLinks = document.querySelectorAll('.navigation a');
  navLinks.forEach(link => {
      link.classList.remove('active');
  });
}

// Function to display temples (all or filtered)
function displayTemples(filteredTemples) {
  clearTemplesGrid(); // Clear the grid before appending new items

  filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');

      templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq. ft.</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      templesGrid.appendChild(templeCard);
  });
}

// Filter functions
const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
const largeTemples = temples.filter(temple => temple.area > 90000);
const smallTemples = temples.filter(temple => temple.area < 10000);

// Display all temples initially
displayTemples(temples);

// Event listeners for navigation menu
document.querySelector('a[href="#Old"]').addEventListener('click', (event) => {
  event.preventDefault();
  clearActiveLinks(); // Clear previously active link
  event.target.classList.add('active'); // Set the clicked link as active
  displayTemples(oldTemples);
});

document.querySelector('a[href="#New"]').addEventListener('click', (event) => {
  event.preventDefault();
  clearActiveLinks();
  event.target.classList.add('active');
  displayTemples(newTemples);
});

document.querySelector('a[href="#Large"]').addEventListener('click', (event) => {
  event.preventDefault();
  clearActiveLinks();
  event.target.classList.add('active');
  displayTemples(largeTemples);
});

document.querySelector('a[href="#Small"]').addEventListener('click', (event) => {
  event.preventDefault();
  clearActiveLinks();
  event.target.classList.add('active');
  displayTemples(smallTemples);
});

document.querySelector('a[href="filtered-temples.html"]').addEventListener('click', (event) => {
  event.preventDefault();
  clearActiveLinks();
  event.target.classList.add('active');
  displayTemples(temples); // Display all temples when "Home" is clicked
});


/*const oldTemples = temples.filter((temple) => temple.dedicated < 1990);
const newTemples = temples.filter((temple) => temple.dedicated > 2000);
const largeTemples = temples.filter((temple) => temple.area > 90000);
const smallTemples = temples.filter((temple) => temple.area < 10000);
const allTemples = (temples) => {
  return temples
} */ 