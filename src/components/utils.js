import axios from 'axios';

const QuizInfo = {
  getQuiz(id) {
    return axios.get(`http://192.168.72.248:3000/quizzes/${ id }`)
  },

  getAllQuizzes() {
    return axios.get('http://192.168.72.248:3000/quizzes')
  }
}

export default QuizInfo;