import Header from "./components/Header";
import ListadeRestaurantes from "./components/Cardapio";
import { GlobalCss, Container } from "./styles";

function App() {
  return (
    <>
      <GlobalCss />
        <Header />
      <Container>
        <ListadeRestaurantes />
      </Container>
    </>
  );
}

export default App;
