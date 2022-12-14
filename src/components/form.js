import React from "react";
import './form.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }
    
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
  
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
        if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  



render() {
  return (
  <div id="main-registration-container" className="frompage">
   <div id="register">
    <center>
      
      <h1 text-color="red">Registration page</h1><br></br>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label> Enter your Name:   </label>
      <input type="text" name="username" placeholder="Enter your name"  value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div><br></br>
      <label>Enter your Email ID: </label>
      <input type="text" name="emailid"  placeholder="Enter your emailid"  value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div><br></br>
      <label>Enter Your Mobile No: </label>
      <input type="text" name="MobileNo"  placeholder="Enter your mobileno"   value={this.state.fields.mobileno} onChange={this.handleChange}   />
      <div className="errorMsg">{this.state.errors.mobileno}</div><br></br>
      <label>Enter Your Password:  </label>
      <input type="password" name="Password" placeholder="Enter your password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div><br></br>
      <input type="submit" className="button"  value="Register"/>
      </form>

      
      </center>
  </div>
</div>

    );
}


}

export default RegisterForm