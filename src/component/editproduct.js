import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Editproduct = () => {
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
      <div className="reg_container">
        <h1>Edit Product</h1>
        <hr color="red" width="150px" />
        <div className="form_info">
          <section className="per_info">
            <h4>Personal Information</h4>
            <hr />
            <p>
              Please enter the following information to create your account.
            </p>
            <div className="grid">
              <CssTextField
                className="fname"
                label="First Name *"
                id="custom-css-outlined-input"
              />
              <CssTextField
                className="lname"
                label="Last Name *"
                id="custom-css-outlined-input"
              />
              <div className="selectw">
              
              <select className="categories" label="Shop by Categories *" name="Books" id="custom-css-outlined-input" style={{width : "357px",fontSize:"17px",fontWeight:"lighter",   height:"56px",border:"1px solid black",borderRadius:"4px"}}>
                <option value="spritual">Shop by Categories *</option>
                <option value="funny">Funny</option>
                <option value="romance">Romance</option>
                <option value="story">Story</option>
              </select>
              </div>
              
              <CssTextField
                className="discription"
                label="Discription *"
                id="custom-css-outlined-input"s
              />
            </div>
          </section>
          <section className="login_info">
          <Button variant="contained" style={{ backgroundColor: "#f14d54", width : "136px", height:"56px" }}>
            Upload
          </Button>
          <CssTextField
                className="np"
                label="no file choosen *"
                id="custom-css-outlined-input"
              />

            
          </section>
          <section className="save">
              <Link to="/login"><Button variant="contained" style={{ backgroundColor: "#80BF32", width : "136px", height:"45px",marginTop:"35px" }}>
                Save
              </Button></Link>
              <Link to="/login"><Button variant="contained" style={{ backgroundColor: "#f14d54", width : "136px", height:"45px",marginTop:"35px",marginLeft:"10px" }}>
                Cancel
              </Button></Link>
           </section>   
        </div>
      </div>
    </>
  );
};

export default Editproduct;