import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../context/global.context'

const Detail = () => {
  const {state, dispatch} = useContextGlobal();
  const {id} = useParams();

  const getDentist = async () => {
    try {
      const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: "GET_DENTIST", payload: res.data});
    } catch(err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <div className={state.darkMode ? "dark" : undefined}>
      <h1>Dentist detail</h1>
      {state.dentist ?
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.dentist.name}</td>
              <td>{state.dentist.email}</td>
              <td>{state.dentist.phone}</td>
              <td>{state.dentist.website}</td>
            </tr>
          </tbody>
        </table>
      : <p>Loading...</p>}
    </div>
  );
};

export default Detail;