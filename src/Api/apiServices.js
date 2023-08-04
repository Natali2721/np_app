import axios from 'axios';
const API_KEY = '732dcfaad69fb475455c551db818568b';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getTrackingInfo = async trackingNumber => {
  const config = {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: trackingNumber,
          Phone: '380979482836',
        },
      ],
    },
  };

  const response = await axios.get(config);
  return response.data;
};

export const getDepartmentsInfo = async city => {
  const config = {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: city,
      Limit: '10',
    },
  };

  const response = await axios.get(config);
  return response.data;
};
