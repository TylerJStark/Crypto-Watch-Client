import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SignUp from "../SignupBtn";
import LogIn from "../LoginBtn";
import Auth from '../../modules/Auth';

//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Jumbotron from "../Jumbotron";

class Home extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            showModalSignup: false,
            showModalLogin: false,
            errors: {},
            successMessage: '',
            user: {
                email: '',
                name: '',
                password: ''
            }
        };
        this.handleOpenModalSignup = this.handleOpenModalSignup.bind(this);
        this.handleCloseModalSignup = this.handleCloseModalSignup.bind(this);
        this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
        this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this);

        this.processSignupForm = this.processSignupForm.bind(this);
        this.processLoginForm = this.processLoginForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    handleOpenModalSignup () {
        this.setState({ showModalSignup: true });
    }

    handleCloseModalSignup () {
        this.setState({ showModalSignup: false });
    }

    handleOpenModalLogin () {
        this.setState({ showModalLogin: true });
    }

    handleCloseModalLogin () {
        this.setState({ showModalLogin: false });
    }

    /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processSignupForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // redirect user after sign up to login page
        this.props.history.push('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  };

  processLoginForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this.props.history.push('/stocks');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

    render() {
        return (
            <div>
                <Jumbotron/>
                <Row>
                    <div className="col text-center"> 
                        <LogIn handleOpenModal={this.handleOpenModalLogin}>Login</LogIn>
                        <SignUp handleOpenModal={this.handleOpenModalSignup}>Sign Up</SignUp>
                    </div>
                </Row>
                {/* <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal> */}
                <Modal ariaHideApp={false} isOpen={this.state.showModalSignup} contentLabel='SignUp Modal'>
                <h1 ref={subtitle => this.subtitle = subtitle}>Sign Up</h1>
                <button onClick={this.handleCloseModalSignup}>close</button>
                <form>
                    <h2>Username</h2>
                    <input />
                    <h2>Email</h2>
                    <input />
                    <h2>Password</h2>
                    <input />
                </form>
                </Modal>
                <Modal ariaHideApp={false} isOpen={this.state.showModalLogin} contentLabel='Login Modal'>
                <form action="/">
                    <h2>Username</h2>
                    <input />
                    <h2>Email</h2>
                    <input />
                    <h2>Password</h2>
                    <input />
                    <br></br>
                    <button type="submit" label="Create New Account" onClick={this.handleCloseModalLogin}>Login</button>
                </form>
                </Modal>
            </div>
        );
    }
}

export default Home;