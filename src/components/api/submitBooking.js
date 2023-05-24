import { API_URL, API_BOOKINGS } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Function for submitting booking, POST request
*/

export async function submitBooking(venueId, dateFrom, dateTo, guests) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateFrom,
      dateTo,
      guests: Number(guests),
      venueId,
    }),
  };

  try {
    const response = await fetch(
      `${API_URL}${API_BOOKINGS}?_customer&_venue`,
      options
    );

    if (!response.ok) {
      throw new Error('Failed to submit booking');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
