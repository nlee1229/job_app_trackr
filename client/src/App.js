import { Router, Redirect } from '@reach/router';
import './App.css';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/dashboard" />
        <Redirect from="/" to="/dashboard" noThrow />
      </Router>
    </div>
  );
}

export default App;
