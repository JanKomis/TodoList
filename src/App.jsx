import * as React from "react";
import Footer from "./components/container components/Footer";
import Header from "./components/container components/Header";
import ItemContainer from "./components/container components/ItemContainer";
import Item from "./components/container components/Item";
import ControlContainer from "./components/container components/ControlContainer";
import FormEditItem from "./components/container components/FormEditItem";
import FormAddItem from "./components/container components/FormAddItem";

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
    { title:"Nákup", text: "Nakoupit v víkend", key: 0, checked: true },
    { title:"STK", text: "Vyřídit STK", key: 1, checked: false },
    { title:"Prohlídka", text: "Zajít na preventivní prohlídku", key: 2, checked: true },
  ];

  //všechny itemy
  const [listValue, setListValue] = useStorageState("listToDo", listToDo);


  //nový přidaný item v popup okně
  const [editItem, setEditItem] = React.useState({
    title:"",
    text: "",
    key: "",
    checked: "",
  });

  //hledaná položka v input SEARCH
  //const [searchValue, setSearchValue] = useStorageState("search", "");
  const [searchValue, setSearchValue] = React.useState("");

  //Otvírání a zavírání popup okna
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
    <div className="w-11/12 mx-auto">
      <Header />
      <ControlContainer
        openAddItemForm={openAddItemForm} //otevření okna
        setOpenAddItemForm={setOpenAddItemForm} //nastavení stavu otevření okna
        searchValue={searchValue} //hledaná hodnota
        handleSearchValue={handleSearchValue} //nastavení stavu hledané hodnoty
        openEditItemForm={openEditItemForm}  //otevření edit okna
        setOpenEditItemForm={setOpenEditItemForm}  //nastavení edit okna
      ></ControlContainer>

      <ItemContainer>
        {filterItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.key}
              onRemoveItem={handleRemoveItem} //odstranění itemu
              handleEditItem={handleEditItem}  //editace itemu
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
