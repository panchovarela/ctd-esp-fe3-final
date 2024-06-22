import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../context/global.context';

const Contact = () => {
  const {state} = useContextGlobal();

  return (
    <div className={state.darkMode ? "dark" : undefined}>
      <div style={{marginLeft: "38px"}}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  );
};

export default Contact;