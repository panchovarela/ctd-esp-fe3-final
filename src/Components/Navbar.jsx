import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import Button from './Button'
import { useContextGlobal } from '../context/global.context'

const Navbar = () => {
  const {state, dispatch} = useContextGlobal();

  return (
    <nav className={state.darkMode ? "darkNav" : undefined}>
      <h2><span style={{color: "rgba(139, 94, 92)"}}>D</span>H Odonto</h2>
      <div>
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favorites</h4>
        </Link>
        <Button handleClick={() => dispatch({type: "TOGGLE_MODE"})} className={state.darkMode ? "darkNavButton" : undefined}>{state.darkMode ? "☀️" : "🌛"}</Button>
      </div>
    </nav>
  );
};

export default Navbar;