const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;


function calculate() {
    const form = document.getElementById('calculatorForm')
    const requestFormData = new FormData(form);

    const data = {};
    for (let [key, value] of requestFormData.entries()) {
        data[key] = value;
    }
    attendance = data.attendance;
    breadSize = data.breadSize;
    waterCups = data.numOfWater;
    special = data.special;
    glutenFree = data.glutenFree;
    glutenFreePersons = data.glutenFreePersons;

    let breadCount = calculateBread(attendance, breadSize, special);
    let waterCount = calculateWater(attendance, waterCups);
    display(breadCount, waterCount, glutenFreePersons);
}

function display(breadCount, waterCount, glutenFreeCount) {
    const breadElement = document.getElementById("bread");
    const waterElment = document.getElementById("water");
    const glutenFreeElment = document.getElementById("glutenFree");
    breadElement.innerHTML = "Number of slices of Bread: " + Math.ceil(breadCount);
    waterElment.innerHTML = "Number of water trays: " + Math.ceil(waterCount);    
    glutenFreeElment.innerHTML = "Number of gluten free peices: " + Math.ceil(glutenFreeCount);
}
function calculateBread(attendance, breadSize, special) {
    if (special === "yes") {

        return attendance * 1.5 / breadSize;
    }
    return attendance / breadSize;
}
function calculateWater(attendance, waterCups) {
    if (special === "yes") {

        return attendance * 1.5 / waterCups;
    }
    return attendance / waterCups;
}

