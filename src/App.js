import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Route exact path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
