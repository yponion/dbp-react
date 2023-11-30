import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreatePage from "./Pages/CreatePage";
import ProjectSummaryPage from "./Pages/ProjectSummaryPage";
import ProjectTaskPage from "./Pages/ProjectTaskPage";
import ProjectTimelinePage from "./Pages/ProjectTimelinePage";
import ProjectManagementPage from "./Pages/ProjectManagementPage";

const routes = [

    {
        path: '/',
        element: <HomePage/>,
        auth: true
    },
    {
        path: '/create',
        element: <CreatePage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/project/summary',
        element: <ProjectSummaryPage/>
    },
    {
        path: '/project/task',
        element: <ProjectTaskPage/>
    },
    {
        path: '/project/timeline',
        element: <ProjectTimelinePage/>
    },
    {
        path: '/project/management',
        element: <ProjectManagementPage/>
    },
];

export default routes;