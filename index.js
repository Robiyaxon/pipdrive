const pipedriveForm = document.getElementById('pipedriveForm');
const API_KEY = "f8c5126566bf8c65d6a81d0af1eab77fbdc9f732";

pipedriveForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    title: document.getElementById('dealName').value,
    value: document.getElementById('dealValue').value,
    visible_to: document.getElementById('dealStage').value,
  };

  fetch('https://api.pipedrive.com/v1/deals?api_token=f8c5126566bf8c65d6a81d0af1eab77fbdc9f732', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('Deal created successfully!');
      pipedriveForm.reset();
    } else {
      alert('Error creating deal. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error creating deal. Please try again.');
  });
});
