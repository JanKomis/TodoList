import Button from "../reusable components/Button";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";

import { PlusCircleIcon } from "@primer/octicons-react";

/*
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
    <div className="flex justify-between p-4 bg-red-600">
      <Button onClick={openPopUp}>
        <PlusCircleIcon size={24} />
      </Button>
      <div className="flex justify-between gap-4">
        <Input
          className=""
          value={searchValue}
          onChange={handleSearchValue}
          withLabel={false}
          placeholder={"Search"}
        >
          Search
        </Input>
        <Select
          className=""
          options={selectOptions}
          onChange={setCompletedValue}
          defaultValue={defaultValue}
        ></Select>
      </div>
    </div>
  );
}
*/

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
    <div className="mb-4 flex justify-between border-4 rounded-xl overflow-hidden">
      <Button onClick={openPopUp} className={"w-12 h-12"}>
        <PlusCircleIcon size={24} />
      </Button>

      <div className="flex justify-end">
        <Input
          className={"w-5/12"}
          value={searchValue}
          onChange={handleSearchValue}
          withLabel={false}
          placeholder={"Search"}
        >
          Search
        </Input>
        <Select
          className={"w-6/12"}
          options={selectOptions}
          onChange={setCompletedValue}
          defaultValue={defaultValue}
        ></Select>
      </div>
    </div>
  );
}
