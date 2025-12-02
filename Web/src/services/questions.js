import api from './api'

const getQuestions = async(difficulty='easy') =>{
    const res = await api.get('/api/questions',{params: {difficulty}});
    return res.data;
}

export default getQuestions;