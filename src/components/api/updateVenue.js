import { API_URL, API_VENUES } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Reusable function for updating venue, PUT request
*/

export async function updateVenue(id, data) {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    console.log(data);
    const response = await fetch(`${API_URL}${API_VENUES}/${id}`, options);

    if (!response.ok) {
      throw new Error('Failed to update venue');
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default updateVenue;
