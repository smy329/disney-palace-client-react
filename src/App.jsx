import './App.css';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-bold">Hello Disney Palace</h1>
      <button className="bg-primary p-10 hover:bg-secondary">
        {' '}
        Click here
      </button>
    </div>
  );
}

export default App;
