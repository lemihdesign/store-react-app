import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/Header/MainNavigation";
import Layout from "./components/Layout/Layout";
import TopBar from "./components/UI/TopBar";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
