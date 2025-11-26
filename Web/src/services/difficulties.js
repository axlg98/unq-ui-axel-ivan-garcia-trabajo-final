import {api} from './api'

//tomar la dificultad.
const getDificulties = async() =>{
    const res = await api.get('/api/difficulty');
    return res.data;
}

export default getDificulties;