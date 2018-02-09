import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';


const Post = (props) => {
    return (
        <Layout>

                <div className="header__hero">
                    <img className="header__image" src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt="" />
                    <h2 className="title-single">
                        {props.movie.title}
                    </h2>
                   
                </div>
                <div className="inner">
                    <h2>{props.movie.tagline}</h2>
                    <p>{props.movie.overview}</p>
                    <p>Originally Released: {props.movie.release_date}</p>

            </div>
            <style jsx>{`

                .header__hero {
                    height: 400px;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .header__hero::before {
                    display: block;
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    right: 0;
                    background: #000;
                    opacity: 0.6;
                    z-index: 1;
                }

                .header__image {
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    object-fit: cover;
                    position: absolute;
                }

                .title-single {
                    position: absolute;
                    max-width: 600px;
                    font-size: 6rem;
                    text-align: center;
                    color: #fff;
                    z-index: 2;
                }

            `}</style> 

        </Layout>
    )
}

Post.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a0145da41926c0453f66b9462ce90e0c`)
    const movie = await res.json();
    
    return { movie };
}

export default Post;