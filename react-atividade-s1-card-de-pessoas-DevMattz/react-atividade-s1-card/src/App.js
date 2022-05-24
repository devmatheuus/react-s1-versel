import Developer from './components/Developer/Developer';
import './App.css';

function App() {
  const devJr = { name: 'Lucas', age: 19, country: 'Brazil' };
  const devPl = { name: 'Gabrielle', age: 25, country: 'Canada' };
  const devSr = { name: 'Matheus', age: 19, country: 'Brazil' };
  return (
    <div className="App">
      <header className="App-header">
        <Developer name={devJr.name} age={devJr.age} country={devJr.country} />
        <Developer name={devPl.name} age={devPl.age} country={devPl.country} />
        <Developer name={devSr.name} age={devSr.age} country={devSr.country} />
      </header>
    </div>
  );
}

export default App;
