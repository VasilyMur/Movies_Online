import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const Index = (props) => {
    return (
        <Layout>
            <div>
                <h1>James Bond Movies</h1>
            </div>
            <div>
                <div className="movies-container">
                    
                    {props.movies.filter((movie, key) => { return movie.original_language === 'en'}).map((movie, key) => {

                        return <div key={key} className="movie">
                                    <Link as={`/p/${movie.id}`} href={`/post?id=${movie.id}`}>

                                            <a><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/></a>

                                    </Link>
                                </div>

                    })}

                </div>
            </div>
            <style jsx>{`
                .movies-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                }
                .movie {
                    max-width: 185px;
                    height: auto;
                }
            `}</style> 
        </Layout>
    )
}



Index.getInitialProps = async function() {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=a0145da41926c0453f66b9462ce90e0c&query=James+Bond');
    const data = await res.json();

    // Prints to the server console only - because page is rendered on the SERVER!!!
    //console.log(data.results.length)
    return {
        movies: data.results
    }

    
}







export default Index;

