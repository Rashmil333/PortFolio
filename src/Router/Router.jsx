import Home from '../Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import { Paths } from '../constant';
import EducationDashboard from '../Pages/Education/EducationDashboard';

const Router = () => {
    return (
        <Routes>
            <Route path={Paths.HOME} element={<Home />} />
            <Route path={Paths.EDUCATION} element={<EducationDashboard />} />
        </Routes>
    )
}

export default Router