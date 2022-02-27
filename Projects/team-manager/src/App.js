import Players from "./components/Players/Players";
import Forms from "./components/Forms/Forms";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Team Manager</h1>
      </header>
      <section>
        <div>
          <Players />
        </div>
        <div>
          <Forms />
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
