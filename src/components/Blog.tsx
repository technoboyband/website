import type { BearBlogPost } from '../types/BearBlogPost';
import '../styles/Thoughts.css';

//todo: move to types
type BlogProps = {
  blogPosts: BearBlogPost[];
  error: string | null;
}

export default function Blog({ blogPosts, error }: BlogProps) {

  if (error) return <p>Failed to load: {error}</p>;
  return (

    <div className='main'>
      <ul>
        {blogPosts.map(p => (
          <div>
            <div key={p.guid ?? p.link}>
              <h2>{p.title}</h2>
              <p>{p.contentSnippet}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>

  );
}