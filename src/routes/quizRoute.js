import Router from 'express'
import quizController from '../controllers/quizController'
import student from '../middlewares/student'

const quizRoute = Router()

quizRoute.put('/', student, quizController.tryAgain)

export default quizRoute
