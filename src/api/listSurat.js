import axios from "axios";

export const fetchSuratData = async () => {
    try {
        const response = await axios.get("https://equran.id/api/v2/surat")
        return response.data;
    } catch (error) {
        console.log(error);
    }
}