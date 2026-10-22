import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import Calculator from '@pages/Calculator/Calculator';
import InsertionSort from '@/pages/QuickSort/InsertionSort';
import QuickSortOri from '@/pages/QuickSort/QuickSortOri';

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="calcu" element={<Calculator />} />
            <Route path="sort" element={<InsertionSort />} />
            <Route path="sorti" element={<QuickSortOri />} />
        </Route>
    </Routes>
};

export default AppRouter;