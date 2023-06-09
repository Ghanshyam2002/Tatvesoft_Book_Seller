import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#414141",
      },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  });

  return (
    <>
      <div className="login_container">
        <h1>Login or Create an Account</h1>
        <hr color="red" width="150px" />
        <div className="main_div">
          <section className="new_customer">
            <h4>New Customer</h4>
            <hr />
            <p>Registration is free and easy</p>

            <ul>
              <li>Faster chackout</li>
              <li>Save multiple shipping address</li>
              <li>View and track order and more</li>
            </ul>
            <Link to="/register">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f14d54",
                  width: "220px",
                  height: "45px",
                  marginTop: "93px",
                }}
              >
                Create an Account
              </Button>
            </Link>
          </section>
          <section className="reg_customer">
            <h4>Registered Customers</h4>
            <hr />
            <p>If you have an account with us, please log in.</p>
            <div className="login_section">
              <CssTextField
                label="Email Address*"
                id="custom-css-outlined-input"
              />
              <CssTextField label="Password *" id="custom-css-outlined-input" />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f14d54",
                  width: "100px",
                  height: "45px",
                }}
              >
                Login
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
