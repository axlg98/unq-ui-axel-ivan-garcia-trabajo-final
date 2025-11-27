import api from './api'

//SE obtienen las preguntas
const getQuestions = async(difficulty) =>{
    const res = await api.get('/api/questions',{params: {difficulty}});
    return res.data;
}

export default getQuestions;