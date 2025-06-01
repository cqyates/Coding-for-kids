import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from "./components/Header.tsx";
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Courses from "./pages/Courses"
function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/lessons" element={<Lessons />} />
    </Routes>
    </>
  )
}

export default App
