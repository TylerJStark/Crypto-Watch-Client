import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => <a className="btn btn-lg active" id='loginBtn' role="button" aria-pressed="true" onClick={() => props.openModal()}>Enter</a>;

export default LoginBtn;