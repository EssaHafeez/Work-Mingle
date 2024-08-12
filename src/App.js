import './App.css';
import UserInterface from './components/UserInterface/UserInterface';
import SelectCategory from './Pages/SelectCategory/SelectCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserInterface />} />
        <Route path="/category" element={<SelectCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
