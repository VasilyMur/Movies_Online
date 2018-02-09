import Router from 'next/router';

class Search extends React.Component {


    movieQuery(event) {
        event.preventDefault();
        const movieId = this.name.value;

        if(!movieId) {
            return;
        }
        this.props.findMovie(movieId);

        Router.push(`/?id=${movieId}`);
        this.movieForm.reset();
    }

    render() {

        return(

        <form ref={(input) => this.movieForm = input} className="movie-edit" onSubmit={(e) => this.movieQuery(e) } >
            <input ref={(input) => {this.name = input}} type="text" placeholder="Movie Name" />
            <button type="submit">Find Movie</button> 
            <style jsx>{`

                .movie-edit {
                    max-width: 40rem;
                    margin: 10rem auto 0;
                }

                input {
                    display: block;
                    width: 100%;
                    padding: 5px;
                    border: 1px solid #e6e6e6;
                    margin-bottom: 5px;
                }

                button {
                    display: block;
                    width: 100%;
                    border: 0;
                    background: #FFC40E;
                    color: #303030;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    padding: 5px;
                }

            `}</style>   
        </form>

        )

    }
}




export default Search;