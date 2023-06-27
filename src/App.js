import logo from './logo.svg';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada's Class</h1>
        <main>
          <StudentList/>
          <ClassInfo/>
        </main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
