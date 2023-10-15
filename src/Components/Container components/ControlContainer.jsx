import Button from "../reusable components/Button";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";

export default function ControlContainer({
  openAddItemForm,
  setOpenAddItemForm,
  searchValue,
  handleSearchValue,
  setCompletedValue,
  selectOptions,
  defaultValue,
  openEditItemForm,
  setOpenEditItemForm,
}) {
  const openPopUp = () => {
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = true));
    setOpenEditItemForm((openEditItemForm) => (openEditItemForm = false));
  };

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
      <Select
        options={selectOptions}
        onChange={setCompletedValue}
        defaultValue={defaultValue}
      ></Select>
    </>
  );
}
