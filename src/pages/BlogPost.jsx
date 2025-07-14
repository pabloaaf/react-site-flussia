import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Highlight from '../components/Highlight';
import Callout from '../components/Callout';
import { usePosts } from '../posts/usePosts';

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
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{frontmatter.title}</h1>
      <p style={{ color: '#777', fontSize: '0.9rem' }}>{frontmatter.date}</p>
      <hr style={{ margin: '2rem 0' }} />

      <MDXProvider components={{ Highlight, Callout }}>
        <Component />
      </MDXProvider>
    </div>
  );
}
