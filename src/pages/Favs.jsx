import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../context/global.context";
import Button from "../Components/Button";

const Favs = () => {
  const {state, dispatch} = useContextGlobal();

  return (
    <div className={state.darkMode ? "dark" : undefined}>
      <h1>Favorites</h1>
      <div className="card-grid">
        {state.favs.map(fav => (
          <Card key={fav.id} dentist={fav}>
            <Button handleClick={() => dispatch({type: "REMOVE_FAV", payload: fav.id})} className="favButton">❌</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favs;
