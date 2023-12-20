/*
import * as React from "react";
import FormItemWindow from "./FormItemWindow";
import PopUp from "../Reusable components/PopUpWindow";

export default function FormAddItem({
  openAddItemForm,
  setOpenAddItemForm,
  listValue,
  setListValue,
}) {
  const [newItem, setNewItem] = React.useState({
    text: "",
    key: crypto.randomUUID(),
  });

  const handleSubmit = (e) => {
    setNewItem({ ...newItem, key: crypto.randomUUID() });
    setListValue((listValue) => [...listValue, newItem]);
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = false));
  };

  return (
    <>
      <PopUp
        setClose={setOpenAddItemForm}
        close={openAddItemForm}
        title={"ahoj"}
      >
        <form className="flex flex-col pt-2" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="bg-yellow-200/25 text-3xl mb-2 p-1 rounded"
            placeholder={"Title"}
            defaultValue={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
            }}
          ></input>
          <textarea
            placeholder={"Description"}
            className={"bg-yellow-200/25 h-20 mb-2 p-1 text-left rounded"}
          ></textarea>

          <button
            type="submit"
            className="ml-auto p-1 px-4 rounded-full bg-yellow-600 hover:bg-yellow-600/25"
          >
            {"gggg"}
          </button>
        </form>
      </PopUp>
    </>
  );
}
*/



import * as React from "react";
import FormItemWindow from "./FormItemWindow";

export default function FormAddItem({
  openAddItemForm,
  setOpenAddItemForm,
  listValue,
  setListValue
}) {
  const [newItem, setNewItem] = React.useState({
    text: "",
    key: crypto.randomUUID(),
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    setNewItem({ ...newItem, key: crypto.randomUUID() });
    setListValue((listValue) => [...listValue, newItem]);
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = false));
  };

  return (
    <FormItemWindow close = {openAddItemForm}
    setClose = {setOpenAddItemForm}
    windowTitle = {"Add Item"}
    item = {newItem}
    setItem = {setNewItem}
    listValue = {listValue}
    setListValue = {setListValue}
    buttonTitle = {"Add Item"}
    handleSubmit ={handleSubmit}></FormItemWindow>
    
  )
}


//close,setClose,windowTitle,item,setItem,buttonTitle

/*<FormItemWindow close = {openAddItemForm}
    setClose = {setOpenAddItemForm}
    title = {Add Item}
    item = {newItem}/>
    */

/*import * as React from "react";

import PopUp from "../Reusable components/PopUpWindow";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";
import Button from "../reusable components/Button";

import { PlusCircleIcon } from "@primer/octicons-react";

export default function FormAddItem({
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewItem({ ...newItem, key: crypto.randomUUID() });
    setListValue((listValue) => [...listValue, newItem]);
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = false));
  };

  return (
    <>
      <PopUp
        setClosePopUp={setOpenAddItemForm}
        closePopUp={openAddItemForm}
        title="Add task"
      >
        <form className="flex flex-col pt-2" onSubmit={(e) => handleSubmit(e)}>
          <Input
            className={"bg-blue-500 text-3xl mb-2"}
            placeholder={"Title"}
            withLabel={false}
          ></Input>
          <textarea
            defaultValue={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
            }}
            placeholder={"Description"}
            className={"bg-blue-500 h-20 mb-2 text-left"}
          ></textarea>

          <button type="submit" className="ml-auto ">
            <PlusCircleIcon size={24} />
          </button>
        </form>
      </PopUp>
    </>
  );
}
*/

/*
export default function FormAddItem({
  openAddItemForm,
  setOpenAddItemForm,
  selectItemOptions,
  listValue,
  setListValue,
}) {

  //vytvoření statu nového itemu
  const [newItem, setNewItem] = React.useState({   
    text: "",
    key: crypto.randomUUID(),
    checked: false,
  });

  //vytvoření statu týkající se statusu completed/incopleted
  //NEPOTŘEBUJEME
  const [selectedValue, setSelectedValue] = React.useState("incompleted");


  const handleSubmit = (e) => {
    e.preventDefault();

    setNewItem({ ...newItem, key: crypto.randomUUID() });
    setListValue((listValue) => [...listValue, newItem]);
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = false));
  };

  return (
    <>
      //stejné
      <PopUp
        setClosePopUp={setOpenAddItemForm}
        closePopUp={openAddItemForm}
        title="Add task"
      >
        //FUNKCE PRO UKONČENÍ FORMULÁŘE POUŽÍT
        <form className="flex flex-col pt-2" onSubmit={(e) => handleSubmit(e)}>
          <Input
            className={"bg-blue-500 text-3xl mb-2"}
            placeholder={"Title"}
            withLabel={false}
          ></Input>
          <textarea
            defaultValue={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
            }}
            placeholder={"Description"}
            className={"bg-blue-500 h-20 mb-2 text-left"}
          ></textarea>

          //POUŽÍT SUBMIT
          <button type="submit" className="ml-auto ">
            <PlusCircleIcon size={24} />
          </button>
        </form>
      </PopUp>
    </>
  );
}
*/
