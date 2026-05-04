import type { BearBlogPost } from '../types/BearBlogPost';

//todo: move to types
type BlogProps = {
    blogPosts: BearBlogPost[];
    error: string | null;
}

export default function Blog({ blogPosts, error }: BlogProps) {

  if (error) return <p>Failed to load: {error}</p>;
  return (
    <ul>
      {blogPosts.map(p => (
        <div className='blog-post'>
        <div key={p.guid ?? p.link}>
          <h2>{p.title}</h2>
          <p>{p.contentSnippet}</p>
        </div>
        </div>
      ))}
    </ul>
  );
}