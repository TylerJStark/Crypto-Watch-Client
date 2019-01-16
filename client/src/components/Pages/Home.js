import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SignUp from "../SignupBtn";
import LogIn from "../LoginBtn";

//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Jumbotron from "../Jumbotron";

class Home extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                    <Jumbotron/>
                <Row>
                    <div className="col text-center"> 
                        <LogIn>Login</LogIn>
                        <SignUp>Sign Up</SignUp>
                    </div>
                </Row>
                <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        );
    }
}

export default Home;



  
// render () {
//     return (
//       <div>
//         <button onClick={this.handleOpenModal}>Trigger Modal</button>
//         
//       </div>
//     );
//   }
// }

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))