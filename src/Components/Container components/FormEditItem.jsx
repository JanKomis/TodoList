import * as React from "react";

import PopUp from "../reusable components/PopUp";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";
import Button from "../reusable components/Button";

export default function FormEditItem({
  setOpenEditItemForm,
  openEditItemForm,
  editItem,
  setEditItem,
  listValue,
  setListValue,
  selectItemOptions,
}) {
  const handleEditNewItem = () => {
    const newList = listValue.map((item) => {
      if (editItem.key === item.key) {
        return { ...item, ...editItem };
      } else {
        return item;
      }
    });
    setListValue(newList);
    setOpenEditItemForm((openEditItemForm) => (openEditItemForm = false));
  };

  const handleSelectedValue = (e) => {
    const selectValue = e.target.value;
    selectValue === "incompleted"
      ? setEditItem({ ...editItem, checked: false })
      : null;
    selectValue === "completed"
      ? setEditItem({ ...editItem, checked: true })
      : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = listValue.map((item) => {
      if (editItem.key === item.key) {
        return { ...item, ...editItem };
      } else {
        return item;
      }
    });
    setListValue(newList);
    setOpenEditItemForm((openEditItemForm) => (openEditItemForm = false));
  };

  return (
    <>
      <PopUp
        setClosePopUp={setOpenEditItemForm}
        closePopUp={openEditItemForm}
        title="Edit task"
      >
        <form onSubmit={handleSubmit}>
          <Input
            value={editItem.text}
            onChange={(e) => {
              setEditItem({ ...editItem, text: e.target.value });
            }}
          >
            Title
          </Input>
          <Select
            options={selectItemOptions.filter(
              (word) => !(word.value === "all")
            )}
            onChange={handleSelectedValue}
            value={editItem.checked === true ? "completed" : "incompleted"}
          ></Select>

          <Button type="submit">Edit</Button>
        </form>
      </PopUp>
    </>
  );
}
