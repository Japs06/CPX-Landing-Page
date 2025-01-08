// Set your Google Apps Script Web App URL
const url = 'https://script.google.com/macros/s/AKfycbxUQd-S4WEK2xqRLkPOCTp1MdrAawOahEwXVOZIl5unNson3sC8oRrFOSCUlQoIdfhYyQ/exec'; // Replace with your actual URL

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const primary_domain = document.getElementById('name').value.trim();

    // Validate form inputs
    if (!name || !email || !phone || !primary_domain) {
      alert('Please fill out all fields.');
      return;
    }

    // Create the data object to send
    const data = {
      name: name,
      email: email,
      phone: phone,
      primary_domain: primary_domain,
    };

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submit-form');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      // Make the POST request
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result.result === 'success') {
        alert('Thank you! Your data has been submitted.');
        form.reset(); // Reset the form
      } else {
        console.error('Server error:', result.error);
        alert('An error occurred: ' + result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to submit. Please try again later.');
    } finally {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
    }
  });
});
