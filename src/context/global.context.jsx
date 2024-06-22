import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch(action.type){
    case "GET_DENTISTS":
      return {...state, data: action.payload};
      case "GET_DENTIST":
      return {...state, dentist: action.payload};
    case "ADD_FAV":
      if(!state.favs.some(fav => fav.id === action.payload.id)) {
        alert("Dentist added succesfully.")
        return {...state, favs: [...state.favs, action.payload]};
      }
      alert("Dentist already in Favorites.")
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(item => item.id != action.payload);
      return {...state, favs: filteredFavs};
    case "TOGGLE_MODE":
      return {...state, darkMode: !state.darkMode};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  darkMode: localStorage.getItem("darkMode") || false,
  data: [],
  dentist: {},
  favs: JSON.parse(localStorage.getItem("favs")) || []
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode)
  }, [state.darkMode]);
  
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => dispatch({type: "GET_DENTISTS", payload: res.data}))
      .catch(err => console.error(err))
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);