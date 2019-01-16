import React from "react";
import "./SignupBtn.css";

const SignupBtn = props => 
<button type="button" id="signupBtn" class="btn btn-dark" data-toggle="modal" data-target="signupModal">{props.children}</button>;

export default SignupBtn; 