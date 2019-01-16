import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => <button type="button" id="loginBtn" className="btn btn-dark" onClick={() => props.handleOpenModal()}>{props.children}</button>;

export default LoginBtn;