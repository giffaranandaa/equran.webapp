import axios from 'axios';

export const detailSurat = async (suratId) => {
  try {
    const response = await axios.get(`https://equran.id/api/v2/surat/${suratId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
