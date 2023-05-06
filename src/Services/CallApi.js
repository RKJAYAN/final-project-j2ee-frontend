import axios from 'axios';

export const callApiPost = async (url, payload) => {    
  const URL = url;
  return await axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', 
    },
    data: payload,
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });    
};

export const callApiGet = async (url) => {    
  const URL = url;
  return await axios(URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json', 
    },    
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });    
};

export const callApiPut = async(url, payload) => {    
  const URL = url;
  return await axios(URL, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json', 
    },    
    data: payload,
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });    
};

export const callApiDelete = async(url, payload) => {    
  const URL = url;
  return await axios(URL, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json', 
    },    
    data: payload,
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });    
};