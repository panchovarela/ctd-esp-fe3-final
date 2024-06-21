import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [user, setUser] = useState({name: "", email: ""});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

  const handleName = e => {
    setUser({...user, name: e.target.value})
  };

  const handleEmail = e => {
    setUser({...user, email: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(user.name.trim().length > 5 && emailRegex.test(user.email)) {
      setShowSuccessMessage(true);
      setShowError(false);
    } else {
      setShowSuccessMessage(false);
      setShowError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full name" value={user.name} onChange={handleName}/>
        <input type="text" placeholder="Email" value={user.email} onChange={handleEmail}/>
        <Button>Send</Button>
      </form>
      {showSuccessMessage && <h3 style={{marginLeft: "38px"}}>Thank you, {user.name}. We will contact you via email as soon as possible.</h3>}
      {showError && <p style={{color: "red", marginLeft: "38px"}}>Please check your information again.</p>}
    </div>
  );
};

export default Form;