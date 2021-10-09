import Vue from "vue";
import Router from 'vue-router';
import Question from '../views/pages/Question.vue';
import TheNavbar from '../views/components/TheNavbar.vue';
import AskQuestion from '../views/pages/AskQuestion.vue';
import Loading from '../views/components/Loading.vue';
import Job from '../views/components/Headerjob.vue';
import JobList from '../views/pages/Job-List.vue';
import QuestionDetail from "../views/pages/QestionDetail.vue";
import Login from "../views/pages/Login.vue";
import SignUp from "../views/pages/SignUp.vue";
import ResetPassword from "../views/pages/Resetpassword.vue";


Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {default: Question, header: TheNavbar}
        },
        {
            path: '/askquestion',
            name: 'AskQuestion',
            components: {default: AskQuestion, header: Loading}
        },
        {
            path: '/joblist',
            name: 'Job-List',
            components:{default: JobList, header: Job}
        },
        {
            path: '/question-details',
            name : 'question-details',
            component: QuestionDetail
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Sign-Up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/Reset-password',
            name: 'ResetPassword',
            component: ResetPassword
        },
    ]
})