import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import { MaterialsPage, QuestionDitailsPage, QuestionsPage, QuizPage, SkillsPage } from '@/pages'

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout/>,
        children: [
            {path: '/', element: <QuestionsPage/>},
            {path: '/quiz', element: <QuizPage/>},
            {path: '/materials', element: <MaterialsPage/>},
            {path: '/skills', element: <SkillsPage/>},
            {path: '/question/:id', element: <QuestionDitailsPage/>}
        ]
    }
])
