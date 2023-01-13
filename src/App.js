import './App.css';
import TodoList from './components/TodoList.component';

function App() {
  return (
    <div className="container">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Todolist App
          </p>
          <p className="subtitle">
            Workshop 20.01.2023
          </p>
        </div>
      </section>

      <div className="columns mt-4">
        <div className="column"></div>

        <div className="column is-one-third content">
          <TodoList/>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default App;
