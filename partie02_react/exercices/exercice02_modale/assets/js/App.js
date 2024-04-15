//TODO
class Bouton extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <button
                className="Bouton"
                onClick={this.props.onClick}
            >
                Open Modal
            </button>
        );
    }
}

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (!this.props.display){
            return (
        
                <div id="myModal" className="modal displayBlock" >
                  <div className="modal-content">
                    <span className="close" onClick={this.props.onClick}>&times;</span>
                    <img alt="" src="assets/images/image01.jpg" />
                    <p>une belle image</p>
                  </div>
                </div>
              );
        }
        
      }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this)

        this.state = {
            display_class: true
        };
    }

    

    showModal(e){
        this.setState({display_class: !this.state.display_class})
        console.log(this.state.display_class)
    }

    render(){
        return (
            <div className="App">
                <Bouton onClick={this.showModal}/>
                <Modal display={this.state.display_class} onClick={this.showModal}/>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.querySelector('#app_container'));
//TODO
root.render(
    <App/> 
);