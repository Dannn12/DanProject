import './App.css';
import Form from './components/CharacterForm';
import Card from './components/CharacterCards';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/CharacterForm">
          <Button
          variant="primary">Add Your Character!</Button>{' '}
         </Link>
        <Link to="/CharacterCards">
          <Button type="button">See your Characters!</Button>
         </Link>
         <h1>Welcome To Dans World Of Characters!</h1>
        <Routes>
          <Route path="/CharacterForm" element={<Form />} />
          <Route path="/CharacterCards" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
