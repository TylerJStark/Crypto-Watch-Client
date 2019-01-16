import React from "react";
import "./SignupBtn.css";

const SignupBtn = props => <button type="button" id="signupBtn" className="btn btn-dark" onClick={() => props.handleOpenModal()}>{props.children}</button>;

export default SignupBtn; 