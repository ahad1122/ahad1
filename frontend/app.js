document.getElementById('vehicleForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/api/vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Vehicle details submitted successfully!');
        } else {
            alert('Failed to submit vehicle details.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});