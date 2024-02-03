import * as React from "react";
import Footer from "./components/containerComponents/Footer";
import Header from "./components/containerComponents/Header";
import ItemContainer from "./components/containerComponents/ItemContainer";
import Item from "./components/containerComponents/Item";
import ControlContainer from "./components/containerComponents/ControlContainer";
import FormEditItem from "./components/containerComponents/FormEditItem";
import FormAddItem from "./components/containerComponents/FormAddItem";

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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

export default function App() {
  const listToDo = [
    { title: "fesfsf", text: "fd", key: 0 },
    { title: "fesf", text: "Vfsefs", key: 1 },
    { title: "profesfa", text: "Zafe", key: 2 },
  ];

  /*
  const listToDo = [
    { title:"Nákup", text: "Nakoupit na víkend", key: 0 },
    { title:"STK", text: "Vyřídit STK", key: 1 },
    { title:"Prohlídka", text: "Zajít na preventivní prohlídku", key: 2 },
  ];
  */

  //všechny itemy
  //const [listValue, setListValue] = useStorageState("listToDo", listToDo);
  const [listValue, setListValue] = React.useState(listToDo);

  //nový přidaný item v popup okně
  const [editItem, setEditItem] = React.useState({
    title: "",
    text: "",
    key: "",
  });

  //hledaná položka v input SEARCH
  const [searchValue, setSearchValue] = useStorageState("search", "");
  //const [searchValue, setSearchValue] = React.useState("");

  //Otvírání a zavírání popup okna
  const [openAddItemForm, setOpenAddItemForm] = React.useState(false);

  const [openEditItemForm, setOpenEditItemForm] = React.useState(false);

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const filterItems = listValue.filter(
    (element) =>
      element &&
      element.title &&
      element.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // puvodni filterItems
  /*
  const filterItems = listValue.filter((element) =>
    element.title.toLowerCase().includes(searchValue.toLowerCase())
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

  //sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  //sm: lg: xl:

  return (
    <div className="w-11/12 sm:w-[600px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto">
      <Header />
      <ControlContainer
        openAddItemForm={openAddItemForm} //otevření okna
        setOpenAddItemForm={setOpenAddItemForm} //nastavení stavu otevření okna
        searchValue={searchValue} //hledaná hodnota
        handleSearchValue={handleSearchValue} //nastavení stavu hledané hodnoty
        openEditItemForm={openEditItemForm} //otevření edit okna
        setOpenEditItemForm={setOpenEditItemForm} //nastavení edit okna
      ></ControlContainer>

      <ItemContainer>
        {filterItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.key}
              onRemoveItem={handleRemoveItem} //odstranění itemu
              handleEditItem={handleEditItem} //editace itemu
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
          setOpenEditItemForm={setOpenEditItemForm} //nastaví otevření okna
          openEditItemForm={openEditItemForm} //otevření okna
          editItem={editItem} //edit item
          setEditItem={setEditItem} //nastaví edit item
          listValue={listValue} //elementy
          setListValue={setListValue} //nastvá elementy
        ></FormEditItem>
      )}
      <Footer />
    </div>
  );
}
