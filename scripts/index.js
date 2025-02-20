const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;

document.getElementsByClassName
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

const yout = 0;