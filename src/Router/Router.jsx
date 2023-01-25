import { Routes, Route } from 'react-router-dom'
import { Paths } from '../constant';
import { lazy, Suspense } from 'react';
import Loader from '../Components/Loader/Loader';
const EducationDashboard = lazy(() => import('../Pages/Education/EducationDashboard'));
const ProjectDashboard = lazy(() => import('../Pages/Projects/ProjectDashboard'));
const Mariana = lazy(() => import('../Pages/Mariana/Mariana'));
const Home = lazy(() => import('../Pages/Home/Home'));

const Router = () => {
    return (
        <Routes>
            <Route path={Paths.HOME} element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
            <Route path={Paths.EDUCATION} element={<Suspense fallback={null}><EducationDashboard /></Suspense>} />
            <Route path={Paths.PROJECTS} element={<Suspense fallback={null}><ProjectDashboard /></Suspense>} />
            <Route path={Paths.SKILLS} element={<Suspense fallback={null}><EducationDashboard /></Suspense>} />
            <Route path={'/mariana-trench'} element={<Suspense fallback={null}><Mariana /></Suspense>} />
        </Routes>
    )
}

export default Router;