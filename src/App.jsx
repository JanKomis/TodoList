import * as React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const listToDo = [
    { text: "Ahoj", key: 0 },
    { text: "Mnau", key: 1 },
    { text: "Cau", key: 2 },
  ];

  const [searchValue, setSearchValue] = React.useState("React");

  const [listValue, seListValue] = React.useState(listToDo);

  function handleSearchValue(event) {
    setSearchValue(event.target.value);
    console.log(searchValue);
  }

  const filterItems = listValue.filter((element) =>
    element.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header />
      <ControlContainer>
        <Button>Add</Button>
        <InputLabel handleSearchValue={handleSearchValue} searchValue={searchValue}>Add</InputLabel>
        <Select>Add</Select>
      </ControlContainer>
      <ItemContainer listValue={filterItems}> </ItemContainer>
      <Footer />
    </>
  );
}

function ControlContainer({ children }) {
  return <>{children}</>;
}

function ItemContainer({ listValue }) {
  return (
    <ul>
      {listValue.map((item) => {
        return <Item text={item.text} key={item.key} />;
      })}
    </ul>
  );
}

function Item({ text }) {
  return (
    <li>
      <p>{text}</p>
      <Button>Delete</Button>
    </li>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function InputLabel({ handleSearchValue, searchValue }) {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" value={searchValue} onChange={handleSearchValue} />
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
