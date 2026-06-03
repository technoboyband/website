import '../styles/Thoughts.css';
import type { BlogProps } from '../types/BlogProps';

export default function Blog({ blogPosts, error }: BlogProps) {
  if (error) return <p>Failed to load: {error}</p>;
  return (
    <div className='main'>
      <h3>Thought Feed</h3>
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