import { API_URL, API_AUTH_LOGIN } from '../constants/urls';

const method = 'POST';

export async function loginProfile(profileData) {
  try {
    const loginUrl = `${API_URL}${API_AUTH_LOGIN}`;

    const response = await fetch(loginUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data));
    } else {
      const errorData = await response.json();
      console.error(errorData);
      throw new Error(JSON.stringify(errorData.statusCode));
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
