const BASE_URL = "https://univ-contact-book.herokuapp.com/api"

async function fetchAPI(url, method="GET", sendData=null) {
  const fetchOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaGFtbWFkIiwiaWF0IjoxNjEyMDE3NzE5LCJleHAiOjE2MTcyMDE3MTl9.L-4AvMQF9lgIYz2t8bYlIVZnO27nC687sHIyZG1gCQY'
    }
  };

  if (sendData) {
    fetchOptions.body = JSON.stringify(sendData);
  }

  const response = await fetch(url, fetchOptions);
  const data = await response.json();

  return data;
}