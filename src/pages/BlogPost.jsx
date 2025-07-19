import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Highlight from '../components/Highlight';
import Callout from '../components/Callout';
import { usePosts } from '../posts/usePosts';
import Header from '../components/Header';
import { SectionB as Section, Subtitle } from '../styles/GlobalStyle';

export default function BlogPost() {
  const { id } = useParams();
  const posts = usePosts();

  if (posts.length === 0) {
    return <p style={{ padding: '2rem' }}>Cargando post...</p>;
  }

  const post = posts.find(p => p.id === id);

  if (!post) return <p style={{ padding: '2rem' }}>Post no encontrado</p>;

  const { Component, frontmatter } = post;

  return (
    <>
      <Header />
      <Section>
        <div style={{maxWidth: '800px', margin: '0 auto' }}>
          <h3>{frontmatter.title}</h3>
          <p style={{ color: '#757575', fontSize: '0.9rem' }}>{frontmatter.date}</p>
          <hr style={{ margin: '1rem 0' }} />

          <MDXProvider components={{ Highlight, Callout }}>
            <Component />
          </MDXProvider>
        </div>
      </Section>
    </>
  );
}
