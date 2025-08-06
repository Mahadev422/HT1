import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import AskQuery from './pages/AskQuery';

function App() {
  return (
    <>
      <main className="w-screen">
        {/* <Toast /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<AskQuery />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
