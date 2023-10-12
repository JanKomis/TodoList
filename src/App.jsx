import * as React from "react";
import Footer from "./components/container components/Footer";
import Header from "./components/container components/Header";
import ItemContainer from "./components/container components/ItemContainer";
import Item from "./components/container components/Item";
import ControlContainer from "./components/container components/ControlContainer";

import Select from "./components/reusable components/Select";
import Button from "./components/reusable components/Button";
import Input from "./components/reusable components/Input";
import PopUp from "./components/reusable components/PopUp";

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
  //const [addNewItem, setAddNewItem] = React.useState("");

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
  };

  return (
    <>
      <Header />
      <ControlContainer
        openPopUp={openPopUp}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        setCompletedValue={setCompletedValue}
        selectOptions={selectItemOptions}
      ></ControlContainer>

      <ItemContainer>
        {filterItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.key}
              onRemoveItem={handleRemoveItem}
              handleChangeCheckBox={handleChangeCheckBox}
            />
          );
        })}
      </ItemContainer>
      {openPopUpValue && (
        <FormAddItem
          openPopUp={openPopUp}
          selectItemOptions={selectItemOptions}
          listValue={listValue}
          setListValue={setListValue}
        ></FormAddItem>
      )}
      <Footer />
    </>
  );
}

function FormAddItem({
  openPopUp,
  selectItemOptions,
  listValue,
  setListValue,
}) {
  const [addNewItem, setAddNewItem] = React.useState("");

  const handleAddNewItem = (listValue) => {
    const newItem = {
      text: addNewItem,
      key: crypto.randomUUID(),
      checked: true,
    };

    setListValue((listValue) => [...listValue, newItem]);
  };

  return (
    <>
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
          options={selectItemOptions.filter((word) => !(word.value === "all"))}
        ></Select>
        <Button onClick={handleAddNewItem}>Add</Button>
      </PopUp>
    </>
  );
}

//onClick={handleAddNewItem}
function FormEditItem() {
  return;
}

//onChange={(event) => onChange(event.target.checked)}
