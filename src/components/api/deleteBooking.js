import { API_URL, API_BOOKINGS } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Function for deleting booking, DELETE request
*/

async function deleteVenue(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}${API_BOOKINGS}/${id}`, options);

  if (!response.ok) {
    throw new Error(`Failed to delete booking: ${response.status}`);
  }
}

export default deleteVenue;
