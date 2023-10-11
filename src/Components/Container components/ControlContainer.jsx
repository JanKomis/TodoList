import Button from "./components/reusable components/Button";
import Input from "./components/reusable components/Input";
import Select from "./components/reusable components/Select";


export default function ControlContainer({
  searchValue,
  handleSearchValue,
  openPopUp,
  setCompletedValue,
}) {
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
      <Select options={selectItemOptions} onChange={setCompletedValue}></Select>
    </>
  );
}