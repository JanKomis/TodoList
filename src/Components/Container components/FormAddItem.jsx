import * as React from "react";

import PopUp from "../reusable components/PopUp";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";
import Button from "../reusable components/Button";

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

//<Button onClick={handleAddNewItem}>Add</Button>
