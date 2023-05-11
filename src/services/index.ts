import axios from 'axios';

const BASE_URL = 'https://www.universal-tutorial.com/api';

export const getAuthToken = async (): Promise<string> => {
  const response = await axios.get(`${BASE_URL}/getaccesstoken`, {
    headers: {
      Accept: 'application/json',
      'api-token':
        'kNMnIQjuBxcJYzBu3czl1ewnJxF-_6Tc3fVrjjXVzSQIkZpB_HtwwNeHO_7Ja8SxcmU',
      'user-email': 'Eduyy_24@hotmail.com',
    },
  });
  return response.data.auth_token;
};
