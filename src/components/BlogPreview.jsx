import { usePosts } from '../posts/usePosts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SectionA as Section, Subtitle } from '../styles/GlobalStyle';


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: left;

  h4 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }
`;

const Button = styled(Link)`
  margin-top: 2rem;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid black;
  border-radius: 999px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background: black;
    color: white;
  }
`;

export default function BlogPreview() {
  const posts = usePosts();
  const recentPosts = posts.slice(0, 3); // los más nuevos ya están ordenados

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <Section>
      <h3><span>Aprende con nosotros</span></h3>
      <Subtitle>Últimas entradas</Subtitle>

      <Grid>
        {recentPosts.map(({ id, frontmatter }) => (
          <Card key={id} to={`/blog/${id}`}>
            <CardContent>
              <h4>{frontmatter.title}</h4>
              <p>{frontmatter.description?.slice(0, 100)}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <Button to="/blog">Ver más entradas →</Button>
    </Section>
  );
}
