import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="sticky w-screen top-0 z-100 bg-gray-50">
        <Header />
      </div>
      <main className="w-screen min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
