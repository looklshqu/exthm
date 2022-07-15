import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import TotalMonitoring from './page/TotalMonitoring';
import StaticReports from './page/StaticReport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="totalmonitoring" element={<TotalMonitoring />} />
          <Route path="staticreports" element={<StaticReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
