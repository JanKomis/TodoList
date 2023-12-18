import * as React from "react";

import PopUp from "../reusable components/PopUp";
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

          <Input
            defaultValue={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
            }}
            withLabel={false}
            placeholder={"Description"}
            className={"bg-blue-500 h-20 mb-2 text-left"}
          ></Input>

          <Button type="submit" className="ml-auto ">
            <PlusCircleIcon size={24} />
          </Button>
        </form>
      </PopUp>
    </>
  );
}

//<Button onClick={handleAddNewItem}>Add</Button>

//kod s selectem available ...
/*
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            defaultValue={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
            }}
          >
            Title
          </Input>
          <Select
            options={selectItemOptions.filter(
              (word) => !(word.value === "all")
            )}
            onChange={handleSelectedValue}
            value={selectedValue}
          ></Select>
          <Button type="submit">Add</Button>
        </form>
      </PopUp>
    </>
  );
}
*/
