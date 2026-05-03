import Parser from 'rss-parser';

const parser = new Parser();

async function getPosts() {
try {
    const feed = await parser.parseURL('https://techno.bearblog.dev/feed/?type=rss');
    return Response.json(feed.items);
} catch (error){
    return Response.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
}
}

export default getPosts;