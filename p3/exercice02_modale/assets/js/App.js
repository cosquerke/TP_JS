class ButtonModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            var: null,
        }
    }
    render() {
        return (
            <button id="myBtn" onClick={this.props.click}>Open Modal</button>
        );
    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            var: null,
        }
    }
    render() {
        console.log(this.props)
        if(this.props.enable_modal){
            return (
                <div id="myModal" class="modal displayBlock">    
                    <div class="modal-content">
                        <span class="close" onClick={this.props.click}>&times;</span>
                        <img alt="" src="assets/images/image01.jpg" />
                        <p> une belle image  </p>
                    </div>
    
                </div>
            );
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_modal: true,
        }
        this.modalEvent = this.modalEvent.bind(this);
    }

    modalEvent(event){
        this.setState({display_modal: !this.state.display_modal})
    }

    render() {
        return (
            <div className="App">
                <ButtonModal click={this.modalEvent}/>
                <Modal enable_modal={this.state.display_modal} click={this.modalEvent}/>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.querySelector('#app_container'));
root.render(<App />)