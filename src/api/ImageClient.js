import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + process.env['REACT_APP_PIC_API_KEY']
    }
})

export const searchImagesByQuery = async (query, page) => {
    const res =  await axiosClient.get('/search/photos', {
        params: { query, page }
    })

    return res
}

export const getImageDetail = async (id) => {
    const res = await axiosClient.get(`/photos/${id}`)

    console.log(res)

    return res
}