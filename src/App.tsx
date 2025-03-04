import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListadeRestaurantes from "./components/Cardapio";
import { GlobalCss, Container } from "./styles";
import Footer from "./components/Footer";
import Perfil from "./components/Cardapio_Perfil"; 
import NovoHeader from "./components/Header_Perfil";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Container>
                <ListadeRestaurantes />
              </Container>
              <Footer />
            </>
          }
        />
        <Route
          path="/perfil"
          element={
            <>
              <NovoHeader />
              <Banner />
              <Container>
                <Perfil />
              </Container>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
