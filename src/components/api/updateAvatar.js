import { API_URL, API_PROFILES } from '../constants/urls';
import accessToken from './localStorage/accessToken';

/*
    Function for updating venue, PUT request
*/

export async function updateAvatar(name, avatarUrl) {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ avatar: avatarUrl }),
  };

  try {
    console.log(avatarUrl);
    const response = await fetch(
      `${API_URL}${API_PROFILES}/${name}/media`,
      options
    );

    if (!response.ok) {
      throw new Error('Failed to update avatar');
    }

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default updateAvatar;
