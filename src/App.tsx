import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import MediumDetail from "./pages/MediumDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/article/:id" component={MediumDetail} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
