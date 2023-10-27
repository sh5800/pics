import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID qaWAWlhZ5uN3C7_XuMPC7krf008d-PHUAZ52ZLp-9H4'
        },
        params:{
            query: term,
        },
    });

    
    return response.data.results;
};

export default searchImages;