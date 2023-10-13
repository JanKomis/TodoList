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
  const [editItem, setEditItem] = React.useState(null);

  //hledaná položka v input SEARCH
  //const [searchValue, setSearchValue] = useStorageState("search", "");
  const [searchValue, setSearchValue] = React.useState("");

  //Otvírání a zavírání popup okna
  const [openAddItemForm, setOpenAddItemForm] = React.useState(false);

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

  const [openEditItemForm, setOpenEditItemForm] = React.useState(true);

  const handleEditItem = (item) => {
    setOpenEditItemForm(!openEditItemForm)
    const chousenItem = listValue.filter((chousenItem) => item.key !== chousenItem.key);
    //editItem, setEditItem
    setEditItem(chousenItem)

    ;
  };

  return (
    <>
      <Header />
      <ControlContainer
        openAddItemForm={openAddItemForm}
        setOpenAddItemForm={setOpenAddItemForm}
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
              handleEditItem={handleEditItem}
            />
          );
        })}
      </ItemContainer>
      {openAddItemForm && (
        <FormAddItem
          openAddItemForm={openAddItemForm}
          setOpenAddItemForm={setOpenAddItemForm}
          selectItemOptions={selectItemOptions}
          listValue={listValue}
          setListValue={setListValue}
        ></FormAddItem>
      )}
      {openEditItemForm && (
        <FormEditItem
          setOpenEditItemForm={setOpenEditItemForm}
          openEditItemForm={openEditItemForm}
        ></FormEditItem>
      )}
      <Footer />
    </>
  );
}

//{openAddItemForm && (<FormEditItem></FormEditItem>)}

function FormAddItem({
  openAddItemForm,
  setOpenAddItemForm,
  selectItemOptions,
  listValue,
  setListValue,
}) {
  const [newItem, setNewItem] = React.useState({
    text: "",
    key: crypto.randomUUID(),
    checked: false,
  });

  const [selectedValue, setSelectedValue] = React.useState("incompleted");

  const handleSelectedValue = (e) => {
    const selectValue = e.target.value;
    selectValue === "incompleted"
      ? setNewItem({ ...newItem, checked: false })
      : null;
    selectValue === "completed"
      ? setNewItem({ ...newItem, checked: true })
      : null;

    setSelectedValue(selectValue);
  };

  const handleAddNewItem = (listValue) => {
    setListValue((listValue) => [...listValue, newItem]);
  };
  //<PopUp openPopUp={openPopUp}>
  return (
    <>
      <PopUp setClosePopUp={setOpenAddItemForm} closePopUp={openAddItemForm}>
        <Input
          value={newItem.text}
          onChange={(e) => {
            setNewItem({ ...newItem, text: e.target.value });
          }}
        >
          Title
        </Input>
        <Select
          options={selectItemOptions.filter((word) => !(word.value === "all"))}
          onChange={handleSelectedValue}
          defaultValue={selectedValue}
        ></Select>

        <Button onClick={handleAddNewItem}>Add</Button>
      </PopUp>
    </>
  );
}

//onClick={handleAddNewItem}
function FormEditItem({ setOpenEditItemForm, openEditItemForm }) {
  return (
    <>
      <PopUp setClosePopUp={setOpenEditItemForm} closePopUp={openEditItemForm}>
        <h1>AAAAAAAAAAAAAAAAAAA</h1>;
      </PopUp>
    </>
  );
}

//onChange={(event) => onChange(event.target.checked)}
/*
options={selectItemOptions.filter((word) => !(word.value === "all"))}
          onChange={handleSelectedValue}
          defaultValue={selectedValue}
          */
