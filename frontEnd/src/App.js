import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPages from "./pages/NotesListPages";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPages />}></Route>
            <Route path="/note/:id" element={<NotePage />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
