import * as React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

//custom hook kombinace usestate a use effect
const useStorageState = (key, initState) => {
  const typeInitState = typeof initState;

  const [value, setValue] = React.useState(
    typeInitState === "string"
      ? localStorage.getItem(key) || initState
      : JSON.parse(localStorage.getItem(key)) || initState
  );

  React.useEffect(() => {
    typeInitState === "string"
      ? localStorage.setItem(key, value)
      : localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default function App() {
  const listToDo = [
    { text: "Ahoj", key: 0 },
    { text: "Mnau", key: 1 },
    { text: "Cau", key: 2 },
  ];

  //all item
  //const [listValue, setListValue] = useStorageState("listToDo", listToDo);
  const [listValue, setListValue] = React.useState(listToDo);

  //new added item
  const [addNewItem, setAddNewItem] = React.useState("aaa");
  //const [addNewItem, setAddNewItem] = React.useState(textNewItem);

  //searched value
  const [searchValue, setSearchValue] = useStorageState("search", "");

  //open pop up window
  const [openPopUpValue, setOpenPopUpValue] = React.useState(true);

  const openPopUp = () => {
    setOpenPopUpValue((openPopUpValue) => !openPopUpValue);
  };

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

  const handleAddNewItem = (listValue) => {
    const newItem = { text: addNewItem, id: crypto.randomUUID() };
    
    setListValue((listValue) => [...listValue, newItem]);
    console.log(listValue);
    
    //addNewItem
  };

  return (
    <>
      <Header />
      <ControlContainer
        openPopUp={openPopUp}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
      ></ControlContainer>
      <ItemContainer
        listValue={filterItems}
        onRemoveItem={handleRemoveStory}
      ></ItemContainer>

      {openPopUpValue && (
        <PopUp openPopUp={openPopUp}>
          <Input
            value={addNewItem}
            onChange={(event) => {
              setAddNewItem(event.target.value);
            }}
          >
            Title
          </Input>

          <h1>{addNewItem}</h1>

          <Select></Select>
          <Button onClick={handleAddNewItem}>Add</Button>
        </PopUp>
      )}
      <Footer />
    </>
  );
}

function ControlContainer({ searchValue, handleSearchValue, openPopUp }) {
  return (
    <>
      <Button onClick={openPopUp}>Add</Button>
      <Input
        value={searchValue}
        onChange={handleSearchValue}
        withLabel={false}
        placeholder={"Search"}
      >
        Search
      </Input>
      <Select></Select>
    </>
  );
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
      <button>Edit</button>
      <button onClick={() => onRemoveItem(item)}>Delete</button>
    </li>
  );
}

function PopUp({ openPopUp, children }) {
  return (
    <div>
      <h2>Add task</h2>
      <button onClick={openPopUp}>Close</button>
      {children}
    </div>
  );
}

function Input({
  children,
  value,
  onChange,
  withLabel = true,
  placeholder = "",
}) {
  return (
    <>
      {withLabel && <label htmlFor="titleInput">{children}</label>}
      <input
        id="titleInput"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

//const selectValue = ["all","incomplete","completed"]

function Select() {
  return (
    <select name="pets" id="pet-select">
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="completed">Completed</option>
    </select>
  );
}
