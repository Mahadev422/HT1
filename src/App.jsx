import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AskQuery from './components/AskQuery';
import Toast from "./components/animation/Toast";

function App() {
  return (
    <>
      <div className="sticky w-screen top-0 z-100 bg-gray-50">
        <Header />
      </div>
      <main className="w-screen min-h-screen">
        {/* <Toast /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<AskQuery />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
