import * as React from "react";
import Footer from "./components/containerComponents/Footer";
import Header from "./components/containerComponents/Header";
import ItemContainer from "./components/containerComponents/ItemContainer";
import Item from "./components/containerComponents/Item";
import ControlContainer from "./components/containerComponents/ControlContainer";
import FormEditItem from "./components/containerComponents/FormEditItem";
import FormAddItem from "./components/containerComponents/FormAddItem";


const useStorageState = (key, initState) => {
  
  const [value, setValue] = React.useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initState;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

export default function App() {
  //test data
  const listToDo = [
    { title: "Nákup", text: "Nakoupit na víkend", key: 0 },
    { title: "STK", text: "Vyřídit STK", key: 1 },
    { title: "Prohlídka", text: "Zajít na preventivní", key: 2 },
  ];

  //all items
  const [listValue, setListValue] = useStorageState("listToDo", listToDo);

  //new added item in pop up window
  const [editItem, setEditItem] = React.useState({
    title: "",
    text: "",
    key: "",
  });

  //search item in SEARCH input
  const [searchValue, setSearchValue] = useStorageState("search", "");

  //Open and close Pop up Window
  const [openAddItemForm, setOpenAddItemForm] = React.useState(false);

  const [openEditItemForm, setOpenEditItemForm] = React.useState(false);

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  
  const filterItems = listValue.filter((element) =>
    element.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  

  /*
  const filterItems = listValue.filter((element) =>
    element.title.includes(searchValue)
  );
  */
  


  const handleRemoveItem = (item) => {
    const newItems = listValue.filter((newItem) => item.key !== newItem.key);
    setListValue(newItems);
  };

  const handleEditItem = (item) => {
    setOpenEditItemForm((openEditItemForm) => (openEditItemForm = true));
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = false));
    const chousenItem = listValue.filter(
      (chousenItem) => item.key === chousenItem.key
    );
    setEditItem(chousenItem[0]);
  };

 
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <Header />
      <ControlContainer
        openAddItemForm={openAddItemForm}
        setOpenAddItemForm={setOpenAddItemForm}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        openEditItemForm={openEditItemForm}
        setOpenEditItemForm={setOpenEditItemForm}
      ></ControlContainer>

      <ItemContainer>
        {filterItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.key}
              onRemoveItem={handleRemoveItem}
              handleEditItem={handleEditItem}
            />
          );
        })}
      </ItemContainer>
      {openAddItemForm && (
        <FormAddItem
          openAddItemForm={openAddItemForm}
          setOpenAddItemForm={setOpenAddItemForm}
          listValue={listValue}
          setListValue={setListValue}
        ></FormAddItem>
      )}
      {openEditItemForm && (
        <FormEditItem
          setOpenEditItemForm={setOpenEditItemForm}
          openEditItemForm={openEditItemForm}
          editItem={editItem}
          setEditItem={setEditItem}
          listValue={listValue}
          setListValue={setListValue}
        ></FormEditItem>
      )}
      <Footer />
    </div>
  );
}
