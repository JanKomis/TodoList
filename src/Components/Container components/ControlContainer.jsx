import Button from "../reusable components/Button";
import Input from "../reusable components/Input";
import Select from "../reusable components/Select";


export default function ControlContainer({
  searchValue,
  handleSearchValue,
  openPopUp,
  setCompletedValue,
  selectOptions
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
      <Select options={selectOptions} onChange={setCompletedValue}></Select>
    </>
  );
}