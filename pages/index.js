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
                <ul>
                    
                    {props.movies.map((movie, key) => {
                        return <li key={key}><Link as={`/p/${movie.id}`} href={`/post?id=${movie.id}`}><a>{movie.original_title}</a></Link></li>
                    })}

                </ul>
            </div>
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

