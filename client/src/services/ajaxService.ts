import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://localhost:3037/api/',
});
// BASIC GET
const fetchData = async (endpoint: string, onSuccess: Function, onError: Function) => {
  try {
    const response = await apiClient.get(endpoint);
    onSuccess(response.data);
  } catch (error) {
    onError(error);
  }
};
// BASIC POST
const postData = async (endpoint: string, data: any, onSuccess: Function, onError: Function) => {
  try {
    const response = await apiClient.post(endpoint, data);
    onSuccess(response.data);
  } catch (error) {
    onError(error);
  }
};
export { fetchData, postData };