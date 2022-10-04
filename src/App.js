import Home from './Components/Pages/Home';
import Footer from './Components/Sections/Footer';
import Navbar from './Components/Sections/Navbar';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from './Components/Pages/Author';
import Library from './Components/Pages/Library';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/author' element={<Author />} />
            <Route path='/library' element={<Library />} />
          </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
