import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My TODO List</h1>
      <p>Organize your day, one task at a time.</p>
      <TodoList />
    </div>
  );
}

export default App;