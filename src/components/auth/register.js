import { API_URL, API_AUTH_REGISTER } from './constants/urls';

const method = 'POST';

export async function registerProfile(profileData) {
  try {
    const registerUrl = `${API_URL}${API_AUTH_REGISTER}`;

    const response = await fetch(registerUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const errorData = await response.json();
      console.error(errorData);
    }
  } catch (error) {
    console.error(error);
  }
}
