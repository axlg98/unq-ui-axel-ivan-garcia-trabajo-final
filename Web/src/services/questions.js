import {api} from './api'

//Brinda las preguntas
const getQuestions = async(difficulty) =>{
    const res = await api.get('/api/questions',{params: difficulty});
    return res.data;
}

export default getQuestions;