import './App.css';
import ListadoPeliculas from './views/ListadoPeliculas';
import Blog from './views/Blog';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {

  return (
 

    <Router>
      <Routes>
        <Route path="/" element={<ListadoPeliculas/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
  </Router>
  );
}

export default App;
