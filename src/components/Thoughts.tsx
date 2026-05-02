
import { Link } from 'react-router'
//import getPosts from '../utils/blog';

export default function Thoughts() {
  //const blogPosts = await getPosts();

  return (
    <>
    <h1>thoughts</h1>
      <section id="center">
        <div>
          <p>blog bodies</p>
        </div>
      </section>
      <aside className='sidebar'>
        <h4>sidebar</h4>
        <ol>
          <li><a href="https://techno.bearblog.dev/vhsdevlog1/">
          blog 1</a></li>
          <li><a href="https://techno.bearblog.dev/vhs-shelf-dev-log-2/">
          blog 2</a></li>
        </ol>
      </aside>
      <Link to="/">home</Link>
    </>
  )
}


