import { API_URL, API_AUTH_REGISTER } from '../../constants/urls';

const method = 'POST';

export async function loginProfile(profile) {
  const registerUrl = API_URL + API_AUTH_REGISTER;
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  return response.json();
}
