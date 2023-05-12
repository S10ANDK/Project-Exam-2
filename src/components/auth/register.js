import { API_URL } from '../constants/urls';

const method = 'POST';

export async function registerProfile(profile) {
  try {
    const registerUrl = `${API_URL}/auth/register`;

    const response = await fetch(registerUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profile),
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
