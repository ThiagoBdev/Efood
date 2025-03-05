import { BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalCss } from "./styles";
import { HomeRota } from "./Rotas/home";
import { PerfilRota } from "./Rotas/perfil";

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        {HomeRota}
        {PerfilRota}
      </Routes>
    </Router>
  );
}

export default App;
