import axios from 'axios';

export const createOrder = async order => {
  try {
    const { data } = axios.post('/api/orders/create', order);
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
  return data;
};

export const pay = async paymentID => {
  try {
    const { data } = await axios.put('/api/orders/pay', { paymentID });
    return data;
  } catch (error) {}
};

export const trackOrderByID = async orderID => {
  const { data } = await axios.get('/api/orders/track/' + orderID);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`/api/orders/allstatus`);
  return data;
};