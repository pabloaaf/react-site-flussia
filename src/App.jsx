import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';

export default function App() {
  return (
    <Router basename="/react-site-flussia/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
