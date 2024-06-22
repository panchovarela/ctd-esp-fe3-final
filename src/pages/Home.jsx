import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../context/global.context'
import Button from '../Components/Button'

const Home = () => {
  const {state, dispatch} = useContextGlobal();

  return (
    <main className={state.darkMode ? "dark" : undefined}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (
          <Card key={dentist.id} dentist={dentist}>
            <Button handleClick={() => dispatch({type: "ADD_FAV", payload: dentist})} className="favButton">⭐</Button>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;