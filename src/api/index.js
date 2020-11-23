const BASE_URL = "https://univ-contact-book.herokuapp.com/api"

export async function fetchAPI(endpoint, method="GET", sendData=null) {
  let url = BASE_URL.concat(endpoint);
  const fetchOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJheml1bDkzIiwiaWF0IjoxNjA2MDI2MjY2LCJleHAiOjE2MDY2MzEwNjZ9.llwtYuZF8PVR9fW7ao-cQPrtXW7iqbVxvWx5bG4d8EU'
    }
  };

  if (sendData) {
    fetchOptions.body = JSON.stringify(sendData);
  }

  const response = await fetch(url, fetchOptions);
  const data = await response.json();

  return data;
}