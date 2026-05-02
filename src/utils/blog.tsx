import Parser from 'rss-parser';
import type { BearBlogPost } from '../types/BearBlogPost';

const parser = new Parser<BearBlogPost>();

async function getPosts() {
    const feed = await parser.parseURL('https://techno.bearblog.dev/feed/?type=rss');
    console.log('feed title:', feed.title);
    console.log('items count:', feed.items.length);
    return feed.items;
}

export default getPosts;