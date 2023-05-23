import { API_URL, API_VENUES } from '../constants/urls';

const user = JSON.parse(localStorage.getItem('user'));
const accessToken = user && user.accessToken;

export async function submitVenue(data) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    console.log(data);
    const response = await fetch(`${API_URL}${API_VENUES}`, options);

    if (!response.ok) {
      throw new Error('Failed to submit venue');
    }

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default submitVenue;
