class ImageClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            var: null,
        }
    }

    render() {
        return (
            <img src={this.props.src} onClick={this.props.click} />
        );
    }
}

class ImageChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            var: null,
        }
    }

    render() {
        return (
            <img src={this.props.src} />
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_scr: "assets/images/nowhite_tux.png",
        }
        this.imageChange = this.imageChange.bind(this);
    }

    imageChange(event){
        this.setState({img_scr: event.target.src});
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <div id="images">
                    <ImageClick src={"assets/images/nowhite_tux.png"} click={this.imageChange}/>
                    <ImageClick src={"assets/images/pax_tux.png"} click={this.imageChange}/>
                </div>
                <div id="image">
                    <ImageChange src={this.state.img_scr}/>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('#app_container'));
root.render(<App />)