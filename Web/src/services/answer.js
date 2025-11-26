import {api} from './api'

//PAra saber si la respuesta es válida o no.
const postAnswer = async(questionId,option) => {
    const res = await api.post('/api/answer',{questionId,option});
    return res.data;
}

export default postAnswer;