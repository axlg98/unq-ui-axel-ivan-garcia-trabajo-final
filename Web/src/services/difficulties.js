import api from './api'

const getDificulties = async() =>{
    const res = await api.get('/api/difficulty');
    return res.data;
}

export default getDificulties;