export default function Item({ item, onRemoveItem, handleChangeCheckBox }) {
  return (
    <li>
      <p>{item.text}</p>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeCheckBox(item)}
      />
      <button>Edit</button>
      <button onClick={() => onRemoveItem(item)}>Delete</button>
    </li>
  );
}
