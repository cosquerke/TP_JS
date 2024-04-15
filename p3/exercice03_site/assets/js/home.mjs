const key = 'b116821a3811b251e489968a5b45422b'
const baseURL = 'https://api.themoviedb.org/3'
const imgURL = 'https://image.tmdb.org/t/p/w1280'

const movieDAO = {
    getPopulars: async (page = 1) => {
        const suffix = `/movie/popular?api_key=${key}&language=en-US&page=${page}`
        const res = await fetch(baseURL + suffix)
        const data = await res.json()
        return data
    },
    find: async (term, page = 1) => {
        const suffix = `/search/movie?api_key=${key}&language=en-US&query=${term}&page=${page}&include_adult=false`
        const res = await fetch(baseURL + suffix)
        const data = await res.json()
        return data
    }
}


class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
        }
    }

    async loadFilms() {
        let films = await movieDAO.getPopulars();
        this.setState({ films: films.results });
    }

    render() {
        if (this.props.display_popular) {
            if (this.state.films.length == 0) {
                this.loadFilms();
            }
            return (
                <section class="content">
                    {this.state.films.map(film => (
                        <article>
                            <a href={"movie.html?id=" + film.id}>
                                <img src={imgURL + "/" + film.poster_path} />

                                <div>
                                    <div>{film.release_date}</div>
                                    <div>{film.original_title}</div>
                                    <div>{film.vote_average}</div>
                                </div>
                            </a>
                        </article>
                    ))}
                </section>
            );
        }
    }
}
class InputFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
        }
        this.keyUpEvent = this.keyUpEvent.bind(this);
    }

    async loadFilms(input_value) {
        let films = await movieDAO.find(input_value);
        this.setState({ films: films.results });
    }

    keyUpEvent(event) {
        this.loadFilms(event.target.value);
    }

    render() {
        if (!this.props.display_popular) {
                return (
                    <div>
                        <header>
                            <button id="refreshPopular"> Popular movies </button>
                            <input id="search" onKeyUp={this.keyUpEvent} onChange={this.props.inputChange} />
                        </header>
                        <section class="content">
                            {this.state.films.map(film => (
                                <article>
                                    <a href={"movie.html?id=" + film.id}>
                                        <img src={imgURL + "/" + film.poster_path} />

                                        <div>
                                            <div>{film.release_date}</div>
                                            <div>{film.original_title}</div>
                                            <div>{film.vote_average}</div>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </section>
                    </div>

                );

        } else
            return (
                <header>
                    <button id="refreshPopular"> Popular movies </button>
                    <input id="search" onKeyUp={this.keyUpEvent} onChange={this.props.inputChange} />
                </header>
            );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_popular: true,
        }
        this.detectInputChange = this.detectInputChange.bind(this);
    }

    detectInputChange(event) {
        if (event.target.value == "") {
            this.setState({ display_popular: true });
        } else {
            this.setState({ display_popular: false });
        }
    }

    render() {
        return (
            <div class="container">
                <InputFilms onKeyUp={this.keyUpEvent} inputChange={this.detectInputChange} display_popular={this.state.display_popular} />
                <Film display_popular={this.state.display_popular} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('#app_container'));
root.render(<App />)