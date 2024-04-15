const key = 'b116821a3811b251e489968a5b45422b'
const baseURL = 'https://api.themoviedb.org/3'
const imgURL = 'https://image.tmdb.org/t/p/w1280'

const movieDAO = {
    getPopulars : async (page=1) => {
        const suffix = `/movie/popular?api_key=${key}&language=en-US&page=${page}`
        const res  = await fetch(baseURL+suffix)
        const data = await res.json()
        return data
    },
    find : async (term, page=1) =>
    {
        const suffix = `/search/movie?api_key=${key}&language=en-US&query=${term}&page=${page}&include_adult=false`
        const res = await fetch(baseURL + suffix)
        const data = await res.json()
        return data
    }
}
//TODO
class Film extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            films: []
        };
    }

    async componentDidMount() {
        let films = await movieDAO.getPopulars();
        this.setState({ films: films.results });
    }

    render() {
        return (
            <div>
                <h2>Films populaires</h2>
                <ul>
                    {this.state.films.map(film => (
                        <li key={film.id}>{film.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
//TODO
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            movies: []
        }
        this.doUpdate = this.doUpdate.bind(this)
    }

    doUpdate(query) {
        if (query != undefined)
            this.setState({ query: query })
        if (this.state.query == "")
            movieDAO.getPopulars()
                .then(data => {
                    this.setState({ movies: data.results })
                })
        else
            movieDAO.find(this.state.query)
                .then(data => {
                    this.setState({ movies: data.results })
                })
    }
    render(){
        return (
            <div className="App">
                <div>Hello App</div>
                <Film/>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.querySelector('#app_container'));
//TODO
root.render(
    <App/>
);