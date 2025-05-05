import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://rrurrkyicmqrisppzodz.supabase.co/functions/v1",
});

export default axiosInstance;
