export default function Select() {
    return (
      <select name="pets" id="pet-select">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    );
  }