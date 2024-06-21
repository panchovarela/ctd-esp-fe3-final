import React from "react";
import { Link } from "react-router-dom";

const Card = ({dentist, children}) => {

  return (
    <div className="card">
        <img src="../../public/images/doctor.jpg" alt="Dentist" style={{width: "100%"}}/>
        <Link to={"/dentist/" + dentist.id}>
          <h3>{dentist.name}</h3>
        </Link>
        <h4>{dentist.username}</h4>
        {children}
    </div>
  );
};

export default Card;