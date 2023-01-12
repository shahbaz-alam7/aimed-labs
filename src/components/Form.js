import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import React, { useState } from "react";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const handleChecked = (fn, arg) => {
    fn(!arg);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handeSubmit = (e) => {
    const { id, password } = userData;
    e.preventDefault();
    if (isTermsChecked && isRememberChecked && password && id) {
      alert("Login Successfull");
    } else {
      alert("Please enter all the fields and check the boxes");
    }
  };
  return (
    <FormWrapper className="form">
      <h3>Login</h3>

      <form className="login-form">
        <label htmlFor="id">Login ID</label>
        <div className="input-div">
          <input
            type="text"
            name="id"
            className="input"
            placeholder="Enter Login ID"
            onChange={handleChange}
            value={userData.id}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="input-div space-around">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Enter Password"
            onChange={handleChange}
            value={userData.password}
          />
          {showPassword ? (
            <AiOutlineEye
              className="icon"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="icon"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <div className=" row">
          <div>
            <input
              type="checkbox"
              id="remeberMe"
              name="remeberMe"
              value="remeberMe"
              checked={isRememberChecked}
              onChange={() =>
                handleChecked(setIsRememberChecked, isRememberChecked)
              }
            />
            <label className="text" htmlFor="remeberMe">
              Remember Me
            </label>
          </div>
          <p className="text link">Change Password</p>
        </div>
        <div>
          <input
            type="checkbox"
            id="termsAndCondition"
            name="termsAndCondition"
            value="Terms"
            checked={isTermsChecked}
            onChange={() => handleChecked(setIsTermsChecked, isTermsChecked)}
          />
          <label className="text" htmlFor="termsAndCondition">
            Agree to
            <span className="link underline">Terms & Conditions</span>
          </label>
        </div>
        <button onClick={handeSubmit}>Login</button>
      </form>
      <p className="text2">
        Don't have an account?{" "}
        <span className="link underline">Register Here</span>
      </p>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    margin-bottom: 25px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 110%;
    margin-top: 15px;
  }
  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    color: #737b86;
    margin: 5px 0;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    color: #737b86;
    margin: 5px 0 15px;
  }
  .input-div {
    border: ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    width: 500px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .link {
    color: ${({ theme }) => theme.colors.text};
  }
  .icon {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .login-form {
      width: 90%;
      margin: auto;
    }
    .input-div {
      width: 100%;
      margin: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .login-form {
      width: 100%;
      height: 275px;
      margin: auto;
    }
    h3 {
      line-height: 90%;
      margin: 20px 10px 10px;
    }
    label {
      margin-top: 5px;
    }
    .input-div {
      width: 100%;
      margin: 5px auto;
    }
  }
`;
