import api from './api'

const sendAnswer = async(questionId,option) => {
    const res = await api.post('/api/answer', {questionId,option});
    return res.data;
}

export default sendAnswer;