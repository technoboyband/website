
import { Link } from 'react-router'
import Blog from './Blog'
import { useEffect, useState } from 'react';
import type { BearBlogPost } from '../types/BearBlogPost';
import Sidebar from './Sidebar';
import '../styles/Thoughts.css'

export default function Thoughts() {
  //todo: pass blog post info to sidebar
  const [blogPosts, setBlogPosts] = useState<BearBlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/server/blogPosts')
      .then(async r => {
        const text = await r.text();
        return JSON.parse(text);
      })
      .then(setBlogPosts)
      .catch(e => setError(String(e)));
  }, []);
  return (
    <div className="thoughts-page">
      <h1>thoughts</h1>
      <div className="thoughts-layout">
        <Sidebar blogPosts={blogPosts} error={error} />
        <Blog blogPosts={blogPosts} error={error} />
        <div className="other-section"> weeklies</div>
      </div>
      <Link to="/">home</Link>
    </div>
  )
}


