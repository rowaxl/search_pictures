import axios from 'axios';

class ImageClient {
    static searchImage = (query, page) => {
        return axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query,
                page
            },
            headers: {
                Authorization: 'Client-ID ' + process.env['API_KEY']
            }
        });
    }
}

export default ImageClient;