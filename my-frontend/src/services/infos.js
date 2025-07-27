import axios from 'axios'
const baseUrl = '/api/infos'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

export default { getAll }