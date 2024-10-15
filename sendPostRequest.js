// sendPostRequest.js
const axios = require('axios');

const userData = {
  username: 'test_user',
  email: 'test.user@example.com',
  password: 'hashed_password',
  profile: {
    firstName: 'Test',
    lastName: 'User',
    age: 25,
    location: 'Test City'
  }
};

axios.post('http://localhost:3000/api/register', userData)
  .then(response => {
    console.log('POST request successful');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error sending POST request:', error);
  });