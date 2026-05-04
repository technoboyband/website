
import { Link } from 'react-router'
import Blog from './Blog'
import { useEffect, useState } from 'react';
import type { BearBlogPost } from '../types/BearBlogPost';
import Sidebar from './Sidebar';

export default function Thoughts() {
  //todo: pass blog post info to sidebar
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
  return (
    <>
      <h1>thoughts</h1>
      <section id="center">
        <Blog blogPosts={blogPosts} error={error} />
      </section>
      <Sidebar />
      <Link to="/">home</Link>
    </>
  )
}


