import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <HashRouter>
      <div className="App">

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <Navigation />
      </div>
    </HashRouter >
  );
}

export default App;
