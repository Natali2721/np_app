import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const ParcelsPage = lazy(() => import('../pages/Parcels'));

const DepartmentsPage = lazy(() => import('../pages/Departments'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ParcelsPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="*" element={<ParcelsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
