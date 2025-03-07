import { BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalCss } from "./styles";
import { HomeRota } from "./Rotas/home";
import { PerfilRota } from "./Rotas/perfil";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <Routes>
          {HomeRota}
          {PerfilRota}
        </Routes>
      </Router>
    </ Provider>
  );
}

export default App;
