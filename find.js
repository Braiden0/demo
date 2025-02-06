// Sample car park data for Nairobi
const carParksInNairobi = [
    { name: 'Westgate Shopping Mall Car Park', address: 'Westlands, Nairobi', facilities: ['24/7 Security', 'Covered Parking'], charges: 'Ksh 100/hr', openingHours: 'Open 24 hours' },
    { name: 'Sarit Centre Car Park', address: 'Westlands, Nairobi', facilities: ['Covered Parking', 'Disabled Access'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Yaya Centre Car Park', address: 'Hurlingham, Nairobi', facilities: ['Valet Service', 'Electric Car Charging'], charges: 'Ksh 80/hr', openingHours: 'Open 24 hours' },
    { name: 'Nairobi Railway Station Car Park', address: 'Nairobi CBD', facilities: ['Public Transport Access', '24/7 Security'], charges: 'Ksh 30/hr', openingHours: '6 AM - 10 PM' },
    { name: 'Garden City Mall Car Park', address: 'Thika Road, Nairobi', facilities: ['Covered Parking', 'Security Cameras'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Two Rivers Mall Car Park', address: 'Ruaka, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 60/hr', openingHours: 'Open 24 hours' },
    { name: 'The Hub Karen Car Park', address: 'Karen, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Milele Mall Car Park', address: 'Ngong, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Galeria Car Park', address: 'Bomas, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Prestige Mall Car Park', address: 'Prestige, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Junction Mall Car Park', address: 'Junction, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Capital Centre Car Park', address: 'South B, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Getway Mall Car Park', address: 'Syokimau, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Belgravia Mall Car park', address: 'South C Road, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Southfield Mall Car park', address: 'South C Road, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Nextgen Mall Car park', address: 'Mombasa Road, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
    { name: 'Getway Mall Car park', address: 'Mombasa Road, Nairobi', facilities: ['Covered Parking', 'Security Guards'], charges: 'Ksh 50/hr', openingHours: 'Open 24 hours' },
];

// Function to find car parks based on location entered by the user
async function findCarParks() {
    const location = document.getElementById('search-location').value.toLowerCase();

    if (!location) {
        alert('Please enter a location!');
        return;
    }

    const filteredCarParks = carParksInNairobi.filter(carPark =>
        carPark.address.toLowerCase().includes(location) || carPark.name.toLowerCase().includes(location)
    );

    displayResults(filteredCarParks);
}

// Function to display the search results
function displayResults(carParks) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (carParks.length === 0) {
        resultsDiv.innerHTML = 'No car parks found for the given location.';
    } else {
        carParks.forEach(carPark => {
            const carParkCard = document.createElement('div');
            carParkCard.classList.add('car-park-card');

            carParkCard.innerHTML = `
                <h1>${carPark.name}</h1>
                <p>Address: ${carPark.address}</p>
                <p>Facilities: ${carPark.facilities.join(', ')}</p>
                <p>Charges: ${carPark.charges}</p>
                <p>Opening Hours: ${carPark.openingHours}</p>
            `;

            resultsDiv.appendChild(carParkCard);
        });
    }
}

