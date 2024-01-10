import api from './api';
import Endpoints from '../../common/Endpoints';

export const VenueLoc = async () => {
  const endpoint = Endpoints.Venue;
  try {
    const response = await api.get(endpoint, {});

    return response;
  } catch (error) {
    // Handle error
    console.error(' error:', error);
    throw error;
  }
};
