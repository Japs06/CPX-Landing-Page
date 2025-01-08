document.getElementById('signup-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    primary_domain: formData.get('primary_domain'),
  };

  const url = 'https://script.google.com/macros/s/AKfycbxUQd-S4WEK2xqRLkPOCTp1MdrAawOahEwXVOZIl5unNson3sC8oRrFOSCUlQoIdfhYyQ/exec';

  try {
    const submitButton = document.getElementById('submit-form');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (result.result === 'success') {
      alert('Thank you for submitting your data!');
      this.reset();
    } else {
      throw new Error(result.error || 'An error occurred while submitting your data.');
    }
  } catch (error) {
    alert('Failed to submit. Please try again.');
    console.error(error);
  } finally {
    const submitButton = document.getElementById('submit-form');
    submitButton.disabled = false;
    submitButton.textContent = 'Submit';
  }
});
