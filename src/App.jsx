import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Detail from "./pages/Detail"
import Favs from "./pages/Favs"
import Layout from "./layout/Layout";

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path={routes.home} element={<Layout/>}>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.detail} element={<Detail/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
              <Route path="*" element={<Favs/>}/>
            </Route>
          </Routes>
      </div>
  );
};

export default App;