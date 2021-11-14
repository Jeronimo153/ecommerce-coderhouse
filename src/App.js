import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header className="headerContainer" />
      <div>
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
