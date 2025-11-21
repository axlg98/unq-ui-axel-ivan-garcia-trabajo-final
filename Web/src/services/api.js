import axios from "axios";

const api = axios.create({
  baseURL: "https://preguntados-api.vercel.app",
});

//tomar la dificultad.
const getDificulties = async() =>{
    const res = await api.get('/api/difficulty');
    return res.data;
}


//brinda las preguntas
const getQuestions = async(difficulty) =>{
    const res = await api.get('/api/questions',{params: difficulty});
    return res.data;
}


//PAra saber si la respuesta es válida o no.
const postAnswer = async(questionId,option) => {
    const res = await api.post('/api/answer',{questionId,option});
    return res.data;
}
