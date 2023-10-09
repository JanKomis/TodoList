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
const selectItemOptions = [
  { text: "All", value: "all" },
  { text: "Incompleted", value: "incompleted" },
  { text: "Completed", value: "completed" },
];

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
export default function App() {
  const listToDo = [
    { text: "Ahoj", key: 0, checked: true },
    { text: "Mnau", key: 1, checked: false },
    { text: "Cau", key: 2, checked: true },
  ];

  //všechny itemy
  //const [listValue, setListValue] = useStorageState("listToDo", listToDo);
  const [listValue, setListValue] = React.useState(listToDo);

  //nový přidaný item v popup okně
  const [addNewItem, setAddNewItem] = React.useState("");

  //hledaná položka v input SEARCH
  //const [searchValue, setSearchValue] = useStorageState("search", "");
  const [searchValue, setSearchValue] = React.useState("");

  //Otvírání a zavírání popup okna
  const [openPopUpValue, setOpenPopUpValue] = React.useState(true);

  const [completedValue, setCompletedValue] = React.useState("all");

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  const handleChangeCheckBox = (item) => {
    const newList = listValue.map((newItem) =>
      item.key === newItem.key
        ? { ...newItem, checked: !newItem.checked }
        : newItem
    );
    setListValue(newList);
  };

  const openPopUp = () => {
    setOpenPopUpValue((openPopUpValue) => !openPopUpValue);
  };

  //meth
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  //VYEXTRAHUJE HODNOTU S DANÝM SLOVEM

  const filterItems = listValue.filter((element) =>
    element.text.toLowerCase().includes(searchValue.toLowerCase()) &&
    completedValue === "all"
      ? true
      : false ||
        (completedValue === "completed" && element.checked === true
          ? true
          : false) ||
        (completedValue === "incompleted" && element.checked === false
          ? true
          : false)
  );

  completedValue === "all" ? console.log("naser si") : console.log("hovnivále");
  console.log("sdddddddddddddddddd");
  console.log(completedValue);
  console.log(typeof listValue[0].checked);
  /*
  console.log("sdddddddddddddddddd");
  console.log(completedValue)
  console.log(typeof listValue[0].checked);
  console.log(typeof completedValue);
  console.log(typeof listValue[0].checked);

  console.log(
    typeof selectItemOptions[0].checked,
    selectItemOptions[0].checked
  );
  console.log(listToDo[0].checked === selectItemOptions[0].checked);
  console.log(1 === 1 && 1 > 1);
  */
  //|| element.value === completedValue

  //////////////////////////////////////////////////

  //meth
  const handleRemoveItem = (item) => {
    const newItems = listValue.filter((newItem) => item.key !== newItem.key);
    setListValue(newItems);
  };

  const handleAddNewItem = (listValue) => {
    const newItem = {
      text: addNewItem,
      key: crypto.randomUUID(),
      checked: true,
    };

    setListValue((listValue) => [...listValue, newItem]);

    //addNewItem
  };

  return (
    <>
      <Header />
      <ControlContainer
        openPopUp={openPopUp}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        setCompletedValue={setCompletedValue}
      ></ControlContainer>
      <ItemContainer
        listValue={filterItems}
        onRemoveItem={handleRemoveItem}
        handleChangeCheckBox={handleChangeCheckBox}
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
          <Select
            options={selectItemOptions.filter(
              (word) => !(word.value === "all")
            )}
          ></Select>
          <Button onClick={handleAddNewItem}>Add</Button>
        </PopUp>
      )}
      <Footer />
    </>
  );
}

function ControlContainer({
  searchValue,
  handleSearchValue,
  openPopUp,
  setCompletedValue,
}) {
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
      <Select options={selectItemOptions} onChange={setCompletedValue}></Select>
    </>
  );
}

function ItemContainer({ listValue, onRemoveItem, handleChangeCheckBox }) {
  return (
    <ul>
      {listValue.map((item) => {
        return (
          <Item
            item={item}
            key={item.key}
            onRemoveItem={onRemoveItem}
            handleChangeCheckBox={handleChangeCheckBox}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onRemoveItem, handleChangeCheckBox }) {
  return (
    <li>
      <p>{item.text}</p>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeCheckBox(item)}
      />
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

function Select({ options, onChange }) {
  return (
    <select onChange={(event) => onChange(event.target.value)}>
      {options.map((item, index) => {
        return (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        );
      })}
    </select>
  );
}

//onChange={(event) => onChange(event.target.checked)}
