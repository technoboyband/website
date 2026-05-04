import {useEffect, useState} from 'react';
import type { BearBlogPost } from '../types/BearBlogPost';

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState<BearBlogPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
  fetch('/api/blogPosts')
    .then(async r => {
      const text = await r.text();
      return JSON.parse(text);
    })
    .then(setBlogPosts)
    .catch(e => setError(String(e)));
}, []);

  if (error) return <p>Failed to load: {error}</p>;
  return (
    <ul>
      {blogPosts.map(p => (
        <div className='blog-post'>
        <li key={p.guid ?? p.link}>
          <h2>{p.title}</h2>
          <p>{p.contentSnippet}</p>
        </li>
        </div>
      ))}
    </ul>
  );
}