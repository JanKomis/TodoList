import * as React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

//custom hook kombinace usestate a use effect
const useStorageState = (initState) => {
  const [searchValue, setSearchValue] = React.useState(
    localStorage.getItem("search") || initState
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchValue);
  }, [searchValue]);

  return [searchValue, setSearchValue];
};

export default function App() {
  const listToDo = [
    { text: "Ahoj", key: 0 },
    { text: "Mnau", key: 1 },
    { text: "Cau", key: 2 },
  ];

  const [searchValue, setSearchValue] = useStorageState("");

  const [listValue, setListValue] = React.useState(listToDo);

  //meth
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  //meth
  const filterItems = listValue.filter((element) =>
    element.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  //meth
  const handleRemoveStory = (item) => {
    const newStories = listValue.filter((story) => item.key !== story.key);
    setListValue(newStories);
  };

  return (
    <>
      <Header />
      <ControlContainer>
        <Button>Add</Button>
        <InputLabel
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
        ></InputLabel>
        <Select>Add</Select>
      </ControlContainer>
      <ItemContainer listValue={listValue} onRemoveItem={handleRemoveStory}>
        {" "}
      </ItemContainer>
      <Footer />
    </>
  );
}

function ControlContainer({ children }) {
  return <>{children}</>;
}

function ItemContainer({ listValue, onRemoveItem }) {
  return (
    <ul>
      {listValue.map((item) => {
        return <Item item={item} key={item.key} onRemoveItem={onRemoveItem} />;
      })}
    </ul>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      <p>{item.text}</p>
      <button onClick={() => onRemoveItem(item)}>Delete</button>
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
      <input
        type="text"
        id="search"
        value={searchValue}
        onChange={handleSearchValue}
      />
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
