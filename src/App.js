import "./css/styles.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import NotFound from "./pages/404";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
