import React from 'react';

const postFiles = import.meta.glob('./*.mdx');

export function usePosts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function loadPosts() {
      const loadedPosts = await Promise.all(
        Object.entries(postFiles).map(async ([path, resolver]) => {
          const module = await resolver();
          const id = path.split('/').pop().replace('.mdx', '');
          return {
            id,
            Component: module.default,
            frontmatter: module.frontmatter || { id, title: id, date: '' },
          };
        })
      );

      // Sort posts by date descending
      loadedPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      setPosts(loadedPosts);
    }

    loadPosts();
  }, []);

  return posts;
}
