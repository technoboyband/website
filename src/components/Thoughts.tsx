
import { Link } from 'react-router'
//import getPosts from '../utils/blog';

export default function Thoughts() {
  //const blogPosts = await getPosts();

  return (
    <>
    <h1>thoughts</h1>
      <section id="center">
        <div>
          <p>blog 1 body</p>
        </div>
      </section>
      <aside className='sidebar'>
        <h4>sidebar</h4>
        <ol>
          <li><a href="https://techno.bearblog.dev/vhsdevlog1/">
          <p>blog 1</p></a></li>
        </ol>
      </aside>
      <Link to="/">home</Link>
    </>
  )
}


