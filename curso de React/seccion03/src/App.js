import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {
  const miPadre = {
    name: 'Juan',
    lastName: 'Marin',
    email: 'juanmarin@email.com',
    conected: false,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={ miPadre }></ComponenteA>
      </header>
    </div>
  );
}

export default App;
