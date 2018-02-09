import Link from 'next/link';

class Movies extends React.Component {


    render() {
        return (
            <div className="movies-container">
                    
            {this.props.movies.filter((movie, key) => { return movie.original_language === 'en'}).map((movie, key) => {

                return <div key={key} className="movie">
                            <Link as={`/post/${movie.id}`} href={`/post?id=${movie.id}`}>
                            

                                    <a><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/></a>

                            </Link>
                        </div>

            })}

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

        </div>
        )
    }
}

export default Movies;