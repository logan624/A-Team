// testCheckUsername.js
import axios from 'axios';

const testCheckUsername = async () => {
  try {
    // Replace 'some-username' with an existing username in your database
    const response1 = await axios.post('http://localhost:5000/users/check-username', {
      username: 'Johnloveslife',
    });
    console.log('Response for existing username:', response1.data);

    // Replace 'nonexistent-username' with a non-existing username
    const response2 = await axios.post('http://localhost:5000/users/check-username', {
      username: 'willwonka',
    });
    console.log('Response for non-existing username:', response2.data);
  } catch (error) {
    console.error('Error testing checkUsername:', error);
  }
};

testCheckUsername();
