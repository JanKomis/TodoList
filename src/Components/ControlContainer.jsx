import Button from "./components/Button";
import Button from "./components/Button";


export default function ControlContainer({ searchValue, handleSearchValue, openPopUp }) {
    return (
      <>
        <Button onClick={openPopUp}>Add</Button>
        <Input value={searchValue} onChange={handleSearchValue} withLabel={false} placeholder = {'Search'}>
          Search
        </Input>
        <Select></Select>
      </>
    );
  }