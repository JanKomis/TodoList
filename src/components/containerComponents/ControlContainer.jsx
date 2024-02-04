import { PlusCircleIcon } from "@primer/octicons-react";


export default function ControlContainer({
  openAddItemForm,
  setOpenAddItemForm,
  searchValue,
  handleSearchValue,
  openEditItemForm,
  setOpenEditItemForm,
}) {
  const openPopUp = () => {
    setOpenAddItemForm((openAddItemForm) => (openAddItemForm = true));
    setOpenEditItemForm((openEditItemForm) => (openEditItemForm = false));
  };

  return (
    <div className="mb-4 flex justify-between border-4 rounded-xl">
      <button onClick={openPopUp} className={"w-12 h-12"}>
        <PlusCircleIcon size={24} />
      </button>

      <div className="flex justify-end">
        <input
          type="text"
          className={"w-10/12"}
          value={searchValue}
          onChange={handleSearchValue}
          placeholder={"Search"}
          maxlength="9"
        >
        </input>
      </div>
    </div>
  );
}

