import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import RecipeDetails from './RecipeDetails';
import './App.css';

function App() {
  return (
    <div className='app-layout'>
      {/* PRESIDENT SIDEBAR */}
      <nav className='sidebar'>
        <h2><span className='emoji-logo'>🥐</span> Bake-Off</h2>
        <ul className='nav-links'>
          <li><Link to="/">🏠 Dashboard</Link></li>
          <li><Link to="/">🔍 Search</Link></li>
          <li><Link to="/">ℹ️ About</Link></li>
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;