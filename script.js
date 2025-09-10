const bookingForm = document.getElementById('bookingForm');
const bookingDetails = document.getElementById('bookingDetails');
const detailsText = document.getElementById('detailsText');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !date || !time || !guests) {
        alert('Please fill all fields.');
        return;
    }

    detailsText.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Time:</strong> ${time}<br>
        <strong>Guests:</strong> ${guests}
    `;
    bookingDetails.style.display = 'block';
    bookingForm.reset();
});
