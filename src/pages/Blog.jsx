import { Link } from 'react-router-dom';
import { usePosts } from '../posts/usePosts';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

export default function Blog() {
  const posts = usePosts();

  if (posts.length === 0) {
    return <p style={{ padding: '2rem' }}>Cargando posts...</p>;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>Blog</h1>
      <ul>
        {posts.map(({ id, frontmatter }) => (
          <li key={id} style={{ marginBottom: '2rem' }}>
            <Link to={`/blog/${id}`} style={{ fontSize: '1.2rem', color: '#0f62fe' }}>
              {frontmatter.title}
            </Link>
            <p style={{ color: '#777' }}>{frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
