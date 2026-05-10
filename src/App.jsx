import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyPromises from './pages/MyPromises';
import CreatePromise from './pages/CreatePromise';
import PromiseDetail from './pages/PromiseDetail';
import PublicProfile from './pages/PublicProfile';
import './App.css';

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>404 — Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/promises" element={<MyPromises />} />
      <Route path="/promises/:id" element={<PromiseDetail />} />
      <Route path="/create" element={<CreatePromise />} />
      <Route path="/profile" element={<PublicProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
