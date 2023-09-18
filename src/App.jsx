import * as React from "react";



function App() {
  return (
    <>
      <Header />
      <ControlContainer>
        <Button>Add</Button>
        <InputLabel>Add</InputLabel>
        <Select>Add</Select>
      </ControlContainer>
      <ItemContainer />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>ToDo App</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        ©2023 by{" "}
        <a href="https://janhajek.com/" className="font-bold">
          Jan Hajek
        </a>
      </p>
    </footer>
  );
}

function ControlContainer({ children }) {
  return <>{children}</>;
}

function ItemContainer({ children }) {
  return <h3>{children}</h3>;
}

function Button({ children }) {
  return <button>{children}</button>;
}

function InputLabel() {
  return (
    <>
      <label for="search">Search</label>
      <input type="text" id="search" />
    </>
  );
}

function Select() {
  return (
    <select name="pets" id="pet-select">
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="completed">Completed</option>
    </select>
  );
}

export default App;
