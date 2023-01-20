import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <BrowserRouter>
      <Search />
        <Category />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

export default App;
