import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

const Post = (props) => {
    return (
        <Layout>
            <h1>{props.movie.title || props.url.query.id}</h1>
            <div className="markdown">
                <Markdown source={`
                    This is our blog post.
                    Yes. We can have a [link](/link).
                    And we can have a title as well.
                    
                    ### This is a title
                    
                    And here's the content.
                `} />
            </div>
            <style jsx global>{`
                .markdown {
                font-family: 'Arial';
                }

                .markdown a {
                text-decoration: none;
                color: blue;
                }

                .markdown a:hover {
                opacity: 0.6;
                }

                .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
                }
            `}</style>
        </Layout>
    )
}

Post.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a0145da41926c0453f66b9462ce90e0c`)
    const movie = await res.json();

    console.log(movie.title)
    return { movie };
}

export default Post;