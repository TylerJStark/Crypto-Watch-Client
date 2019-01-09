import React from "react";
import "./LoginModal.css";

const LoginModal = props => (
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="User's email" aria-label="userEmail" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">First and last name</span>
            </div>
              <input type="text" aria-label="First name" class="form-control"/>
              <input type="text" aria-label="Last name" class="form-control"/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  
)
  
export default LoginModal;