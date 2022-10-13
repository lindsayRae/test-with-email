document.getElementById('contactSubmitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  handleContactSubmit();
});

document.getElementById('testBtn').addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('heard test btn...');

  try {
    const response = await fetch('/api/email', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {}
});

const handleContactSubmit = async () => {
  const body = {
    fullName: document.getElementById('formFullName').value,
    email: document.getElementById('formEmail').value,
    message: document.getElementById('formMessage').value,
  };

  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      document.getElementById('emailForm').reset();
    }
  } catch (error) {
    console.log('error', error);
  }
};
