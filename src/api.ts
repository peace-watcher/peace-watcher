import axios from 'axios';

const client = axios.create({
  baseURL: 'https://peacewatcher.shop',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const registerCCTV = async (cctvData: { id: string; location: string }) => {
  try {
    const response = await client.post(`/alert/registerCCTV`, cctvData);
    return response.data;
  } catch (error : any) {
    throw new Error(`CCTV registration failed: ${error.message}`);
  }
};

export const postPushNotificationTrigger = async () => {
  try {
    const response = await client.post(`/alert/send`);
    console.log('Push notification sent:', response.data);
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
};
