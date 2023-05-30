import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [userName, setUsername] = useState("");
  return (
    <div className="register">
      <img
        src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
        alt="Logo"
        title="Logo"
      />
      <p className="header">
        <span data-icon="p"></span>
        Register
      </p>
      <div className="formInput">
        <label className="formLabel">Full Name</label>
        <input
          type="text"
          className="formTextInput"
          name="userName"
          id="userName"
          onChange={(event) => setUsername(event.target.value)}
          minlength="3"
          maxlength="30"
          autocomplete="off"
          placeholder="Enter your Full Name"
          value={userName}
        />
      </div>
      <div className="formInput">
        <label className="formLabel">Mobile Number</label>
        <div>
          <div class="mobilePrefix">+91</div>
          <input
            type="text"
            className="mobileInput"
            placeholder="Enter your Mobile Number"
            name="usrmb"
            id="usrmb"
            value=""
            maxlength="10"
            autocomplete="off"
          />
          <p className="helperText">
            OTP will be sent on this Mobile No. for verification.
          </p>
        </div>
      </div>
        <div className="formInput">
          <label className="formLabel">Email ID</label>
          <input
            type="text"
            className="formTextInput"
            placeholder="Enter your Email ID"
            name="usremail"
            id="usremail"
            autocomplete="off"
            maxlength="50"
            onchange="javascript: ValidateEmail('usremail','usremailerr');"
            value=""
          ></input>
        </div>
        <div className="formInput">
          <label class="formLabel">Password</label>
          <input
            type="password"
            className="formTextInput"
            placeholder="Enter your Password"
            name="usrpass"
            id="usrpass"
            minlength="8"
            maxlength="20"
            autocomplete="off"
            onchange="validPassword('usrpass','usrpasserr')"
            value=""
          />
          <p className="helperText">
            Password must be at least 8 characters long with 1 Uppercase, 1
            Lowercase &amp; 1 Numeric character.
          </p>
        </div>
        <div
          class="continue"
          id="continueid"
          onclick="javascript:return validateForm();"
        >
          CONTINUE
        </div>
      </div>
  );
}

export default Register;
