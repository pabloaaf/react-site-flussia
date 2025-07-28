import { Link } from 'react-router-dom';
import { usePosts } from '../posts/usePosts';
import Header from '../components/Header';
import { SectionB as Section, Subtitle } from '../styles/GlobalStyle';
import Footer from '../components/Footer'
import { PageWrapper, FooterWrapper } from '../styles/GlobalStyle';

export default function Blog() {
  const posts = usePosts();

  if (posts.length === 0) {
    return <p style={{ padding: '2rem' }}>Cargando posts...</p>;
  }

  return (
    <PageWrapper>
      <Header />
      <Section>
        <h3>Blog</h3>
        <ul>
          {posts.map(({ id, frontmatter }) => (
            <li key={id} style={{ marginBottom: '2rem' }}>
              <Link to={`/blog/${id}`} style={{ fontSize: '1.2rem', color: '#0f62fe' }}>
                {frontmatter.title}
              </Link>
              <p style={{ color: ({ theme }) => theme.colors.accent }}>{frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </Section>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
}