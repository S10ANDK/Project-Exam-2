import { API_URL, API_VENUES } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Reusable function for creating venue, POST request
*/

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
    const response = await fetch(`${API_URL}${API_VENUES}`, options);

    if (!response.ok) {
      throw new Error('Failed to submit venue');
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default submitVenue;
