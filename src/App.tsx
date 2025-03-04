import Header from "./components/Header";
import ListadeRestaurantes from "./components/Cardapio";
import { GlobalCss, Container } from "./styles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalCss />
        <Header />
      <Container>
        <ListadeRestaurantes />
      </Container>
        <Footer />
    </>
  );
}

export default App;
