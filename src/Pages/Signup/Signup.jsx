import React from 'react';
import './Signup.css'; // Updated CSS file

const Signup = () => {
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg css-1hwm6g9q">
      <div className="MuiContainer-root MuiContainer-maxWidthLg css-1l3aghgq">
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-11ph2rdq">
          <img
            src="data:image/svg+xml;base64,..."
            alt="TaskRabbit logo"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
        </div>
        <div>
          <div>
            <div id="adblock-detection-wrapper">
              <div className="adBlock"></div>
            </div>
            <form className="login-signup-v2q" style={{ width: '100%' }}>
              <fieldset className="login-signup-v2-item-firstq">
                <div data-validation-message="Can't be blank." className="error-container">
                  <label htmlFor="first_name">
                    <span className="visually-hiddenq">First Name</span>
                    <span className="visually-hiddenq" id="first_name-error">Can't be blank.</span>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      id="first_name"
                      aria-describedby="first_name-error"
                      className="login-input-fieldsq"
                      data-testid="input-field"
                      value=""
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="login-signup-v2-itemq">
                <div data-validation-message="Can't be blank." className="error-container">
                  <label htmlFor="last_name">
                    <span className="visually-hiddenq">Last Name</span>
                    <span className="visually-hiddenq" id="last_name-error">Can't be blank.</span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      id="last_name"
                      aria-describedby="last_name-error"
                      className="login-input-fieldsq"
                      data-testid="input-field"
                      value=""
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="login-signup-v2-itemq">
                <div data-validation-message="Can't be blank." className="">
                  <label htmlFor="email">
                    <span className="visually-hiddenq">Email Address</span>
                    <span className="visually-hiddenq" id="email-error">Can't be blank.</span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      aria-describedby="email-error"
                      className="login-input-fieldsq"
                      data-testid="input-field"
                      value=""
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="login-signup-v2-itemq">
                <div className="row">
                  <label htmlFor="phone_number">
                    <div></div>
                    <div className="flex-columnq">
                      <div className="countryDropdownq">
                        <button
                          type="button"
                          className="countryDropdown--selectedCountryq"
                          tabIndex="0"
                          data-testid="countryDropdownSelectedCountry"
                        >
                          <span className="countryDropdown--flagq countryDropdown--list-item--flag flag:US">&nbsp;</span>+1
                          <i className="ss-icon ss-lnr-chevrons-expand-vertical"></i>
                        </button>
                      </div>
                      <input
                        id="phone_number"
                        className="mobilePhoneNumberWithDropdownq"
                        type="text"
                        aria-describedby="phone_number-label"
                        placeholder="Phone Number"
                        name="phone_number"
                        value=""
                      />
                    </div>
                  </label>
                </div>
              </fieldset>
              <fieldset className="login-signup-v2-itemq">
                <div data-validation-message="Can't be blank." className="">
                  <label htmlFor="password">
                    <span className="visually-hiddenq">Password</span>
                    <span className="visually-hiddenq" id="password-error">Can't be blank.</span>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      aria-describedby="password-error"
                      className="login-input-fieldsq"
                      data-testid="input-field"
                      value=""
                    />
                  </label>
                </div>
              </fieldset>
              <fieldset className="login-signup-v2-item-consentq">
                <p className="MuiTypography-root MuiTypography-body2 css-q">By clicking "Sign up," you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
              </fieldset>
              <fieldset className="login-signup-v2-itemq">
                <button type="submit" className="MuiButtonBase-rootq">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
