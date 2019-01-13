import React, {Component} from "react";

import SignUp from "../SignupBtn";
import LogIn from "../LoginBtn";
import SignupModal from "../SignupModal";

//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Jumbotron from "../Jumbotron";

class Home extends Component {


    signupClick = () => {
        // <SignupModal/>
    };

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
            </div>
        );
    }
}

export default Home;