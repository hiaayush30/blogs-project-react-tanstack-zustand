import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;