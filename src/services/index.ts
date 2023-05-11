import axios from 'axios';

const BASE_URL = 'https://www.universal-tutorial.com/api';

export const getAuthToken = async (): Promise<string> => {
  const response = await axios.get(`${BASE_URL}/getaccesstoken`, {
    headers: {
      Accept: 'application/json',
      'api-token':
        'qiBvxm5fv7Q8CB0fz0xfjJ1fYmV_46nXKOjUuMlXOn0JxDefmGXpGcpUr0J5Mv_MMYc',
      'user-email': 'Eduyy.24@gmail.com',
    },
  });
  return response.data.auth_token;
};

export const getCountries = async (token: string): Promise<string[]> => {
  const response = await axios.get(`${BASE_URL}/countries/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  return response.data.map((country: any) => country.country_name);
};
