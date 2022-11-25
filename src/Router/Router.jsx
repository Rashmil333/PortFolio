import Home from '../Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import { Paths } from '../constant';

const Router = () => {
    return (
        <Routes>
            <Route path={Paths.HOME} element={<Home />} />
        </Routes>
    )
}

export default Router