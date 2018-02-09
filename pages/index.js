import Layout from '../components/Layout';
import Movies from '../components/Movies';
import Search from '../components/Search';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



class Index extends React.Component {

    constructor() {
        super();

        this.findMovie = this.findMovie.bind(this);
        this.state = {
            movieName: ''
        }

    }


    static async getInitialProps(context) {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a0145da41926c0453f66b9462ce90e0c&query=${context.query.id}`);
                const data = await res.json();
            
                // Prints to the server console only - because page is rendered on the SERVER!!!
                //console.log(data.results.length)
                return {
                    movies: data.results,
                    name: context.query.id
                }
      }


    findMovie(movie) {
        // const movies = {...this.state.movieName};
        // movies[`name`] = movie;
        // console.log(movies)
        let currentMovie = this.state.movieName;
        currentMovie = movie;
        this.setState({ movieName: currentMovie });
        
    }

   

    render(props) {


        return (
            <Layout>
 
                    <div className="inner">
                        <Search findMovie={this.findMovie}/>
                            <div>
                                {/* <h1>{this.props.name}</h1> */}
                                <h1>{this.props.name}</h1>
                            </div>
                            <div>
                                
                                <Movies movies={this.props.movies} />
               
                          
                                    
                            </div>
                    </div>
 
            </Layout>
        )
    }
}


// Index.getInitialProps = async function(context) {
// console.log(context)
//         const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a0145da41926c0453f66b9462ce90e0c&query=${context.query.id}`);
//         const data = await res.json();
    
//         // Prints to the server console only - because page is rendered on the SERVER!!!
//         //console.log(data.results.length)
//         return {
//             movies: data.results,
//             name: context.query.id
//         }
        
        
//     }





export default Index;

