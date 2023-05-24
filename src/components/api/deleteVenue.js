import { API_URL, API_VENUES } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Function for deleting venue, DELETE request
*/

async function deleteVenue(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${API_URL}${API_VENUES}/${id}`, options);

  if (!response.ok) {
    throw new Error(`Failed to delete venue: ${response.status}`);
  }
}

export default deleteVenue;
