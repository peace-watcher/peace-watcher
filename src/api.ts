import axios from 'axios';

const client = axios.create({
  baseURL: 'https://peacewatcher.shop/alert',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const postPushNotificationTrigger = async () => {
  try {
    const response = await client.post(`/send`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
