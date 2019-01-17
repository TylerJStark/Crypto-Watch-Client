import React, {Component} from "react";
import Modal from 'react-modal';
import SignUp from "../SignupBtn";
import LogIn from "../LoginBtn";


//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Jumbotron from "../Jumbotron";
// import Infoboard from '../Infoboard';


class Home extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true}, console.log('happenin'));
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Jumbotron/>
                <Row>
                    <div className="col text-center"> 
                        <LogIn openModal={this.openModal}>Enter</LogIn>
                        <Modal id="loginModal"
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal} 
                        >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
                        
                        <div>I am a modal</div>
                        <form>
                        <div>Name</div>
                          <input />
                          <div>Email</div>
                          <input />
                          <div>Password</div>
                          <input />
                        </form>
                        <br></br>
                        <a href='/stocks'><button onClick={this.closeModal}>Login</button></a>
                        </Modal>
                    </div>
                </Row>
            </div>
        
        );
    }
}

export default Home;