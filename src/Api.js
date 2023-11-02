import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`

export const fetchImages = async (page, { descriptor}) => {
    const response = await axios.get(`?page=${page}&key=39342473-635130f0c1fb6ae6ad40722d8&q=${descriptor}&image_type=photo&per_page=12`)
  
    return response.data
}

