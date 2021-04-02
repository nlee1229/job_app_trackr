import { Router, Redirect } from '@reach/router';
import './App.css';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/dashboard"/>
      </Router>
    </div>
  );
}

export default App;
