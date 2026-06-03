import type { sideBarProps } from '../types/sideBarProps';
import '../styles/Thoughts.css';

export default function Sidebar(props: sideBarProps) {
    if (props.error) return <p>Failed to load: {props.error}</p>;
    return (
        <div className='sidebar'>
            <h3>Recent Thoughts</h3>
            <ul>
                {props.blogPosts.map(p => (
                    <div>
                        <div key={p.guid ?? p.link}>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                <h2>{p.title}</h2>
                            </a>
                            <p>{p.pubDate}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>

    );
}