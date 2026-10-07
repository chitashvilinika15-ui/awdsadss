const cars = [

    //Audi
    "Audi A3",
    "Audi A4",
    "Audi A5",
    "Audi A6",
    "Audi A7",
    "Audi A8",
    "Audi Q3",
    "Audi Q5",
    "Audi Q7",
    "Audi Q8",
    "Audi TT",
    "Audi R8",

    //BMW
    "BMW 1 Series",
    "BMW 2 Series",
    "BMW 3 Series",
    "BMW 4 Series",
    "BMW 5 Series",
    "BMW 7 Series",
    "BMW 8 Series",
    "BMW X1",
    "BMW X3",
    "BMW X5",
    "BMW X6",
    "BMW X7",
    "BMW Z4",
    "BMW M3",
    "BMW M4",
    "BMW M5",

    //Mercedes-Benz
    "Mercedes-Benz A-Class",
    "Mercedes-Benz C-Class",
    "Mercedes-Benz E-Class",
    "Mercedes-Benz S-Class",
    "Mercedes-Benz CLA",
    "Mercedes-Benz CLS",
    "Mercedes-Benz GLA",
    "Mercedes-Benz GLB",
    "Mercedes-Benz GLC",
    "Mercedes-Benz GLE",
    "Mercedes-Benz GLS",
    "Mercedes-Benz G-Class",
    "Mercedes-Benz AMG GT",

    //Toyota
    "Toyota Camry",
    "Toyota Corolla",
    "Toyota Prius",
    "Toyota RAV4",
    "Toyota Highlander",
    "Toyota Land Cruiser",
    "Toyota 4Runner",
    "Toyota Supra",
    "Toyota GR86",

    //Honda
    "Honda Civic",
    "Honda Accord",
    "Honda CR-V",
    "Honda HR-V",
    "Honda Pilot",
    "Honda NSX",

    //Volkswagen
    "Volkswagen Golf",
    "Volkswagen Passat",
    "Volkswagen Jetta",
    "Volkswagen Tiguan",
    "Volkswagen Touareg",
    "Volkswagen Arteon",

    //Lexus
    "Lexus IS",
    "Lexus ES",
    "Lexus GS",
    "Lexus LS",
    "Lexus NX",
    "Lexus RX",
    "Lexus GX",
    "Lexus LX",

    //Ford
    "Ford Mustang",
    "Ford Focus",
    "Ford Fiesta",
    "Ford Explorer",
    "Ford Escape",
    "Ford Bronco",
    "Ford F-150",

    //Nissan
    "Nissan Altima",
    "Nissan Maxima",
    "Nissan Sentra",
    "Nissan Qashqai",
    "Nissan X-Trail",
    "Nissan Pathfinder",
    "Nissan Patrol",
    "Nissan GT-R",

    // Hyundai
    "Hyundai Elantra",
    "Hyundai Sonata",
    "Hyundai Tucson",
    "Hyundai Santa Fe",
    "Hyundai Palisade",
    "Hyundai i30",

    //Kia
    "Kia Rio",
    "Kia Forte",
    "Kia K5",
    "Kia Sportage",
    "Kia Sorento",
    "Kia Telluride",
    "Kia Stinger",

    //Porsche
    "Porsche 911",
    "Porsche Cayman",
    "Porsche Boxster",
    "Porsche Panamera",
    "Porsche Macan",
    "Porsche Cayenne",
    "Porsche Taycan",

    //Tesla
    "Tesla Model 3",
    "Tesla Model S",
    "Tesla Model X",
    "Tesla Model Y",

    //Chevrolet
    "Chevrolet Camaro",
    "Chevrolet Corvette",
    "Chevrolet Malibu",
    "Chevrolet Tahoe",
    "Chevrolet Suburban",

    //Mazda
    "Mazda 3",
    "Mazda 6",
    "Mazda CX-3",
    "Mazda CX-5",
    "Mazda CX-9",
    "Mazda MX-5",

    //Subaru
    "Subaru Impreza",
    "Subaru Legacy",
    "Subaru Forester",
    "Subaru Outback",
    "Subaru WRX",
    "Subaru BRZ"
];
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const selectedCar = document.getElementById("selectedCar");
searchInput.addEventListener("input", function () {
    const value = searchInput.value.trim().toLowerCase();
    if (value === "") {
        results.innerHTML = "";
        selectedCar.innerHTML = "";
        return;
    }
    const filteredCars = cars.filter(function (car) {
        return car.toLowerCase().includes(value);

    });
    if (filteredCars.length === 0) {
        results.innerHTML = `
            <div class="no-results">
                🔎 No cars found
            </div>
        `;
        return;
    }
    results.innerHTML = `
        <ul>
            ${filteredCars.map(function (car) {
                return `
                    <li onclick="selectCar('${car}')">
                        <span class="car-icon">
                            🚗
                        </span>
                        <span class="car-name">
                            ${car}
                        </span>
                    </li>
                `;
            }).join("")}
        </ul>
    `;
});
function selectCar(car) {
    searchInput.value = car;
    results.innerHTML = "";
    selectedCar.innerHTML = `
        <div class="car-card">
            <div class="big-icon">
                🚗
            </div>
            <h2>
                ${car}
            </h2>
            <p>
                You selected this car.
            </p>
            <button
                class="car-button"
                onclick="clearSelection()"
            >
                Search Again
            </button>
        </div>
    `;
}
function clearSelection() {
    searchInput.value = "";
    selectedCar.innerHTML = "";
    searchInput.focus();
}