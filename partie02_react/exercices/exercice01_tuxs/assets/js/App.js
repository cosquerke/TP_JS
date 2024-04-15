//TODO
class ImageClickable extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <img
                className="ImageClickable"
                src={this.props.src}
                onClick={this.props.onClick}
            />
        );
    }
}

class ImageCible extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <img
                className="ImageCible"
                src={this.props.src}
                onClick={this.props.onClick}
            />
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleImage = this.handleImage.bind(this);

        this.state = {
            src_cible: this.props.img_1
        };
    }
    
    handleImage(e) {
        this.setState({src_cible: e.target.src});
    }

    render(){
        return (
            <div className="App">
                <div id="images">
                    <ImageClickable src={this.props.img_1} onClick={this.handleImage}/>
                    <ImageClickable src={this.props.img_2} onClick={this.handleImage}/>
                </div>
                <div id="image">
                    <ImageCible src={this.state.src_cible}></ImageCible>
                </div>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.querySelector('#app_container'));
//TODO
root.render(
    <App 
    img_1={"assets/images/nowhite_tux.png"}
    img_2={"assets/images/pax_tux.png"}
    /> 

);