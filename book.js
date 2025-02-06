// Function to book parking
function bookParking() {
    alert('Your parking spot has been booked!');
    document.getElementById('booking-section').classList.add('hidden');
    document.getElementById('location').value = ''; // Clear search input
}
