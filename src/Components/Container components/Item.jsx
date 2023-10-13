export default function Item({ item, onRemoveItem, handleChangeCheckBox, handleEditItem }) {
  return (
    <li>
      <p>{item.text}</p>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeCheckBox(item)}
      />
      <button onClick={() => handleEditItem(item)}>Edit</button>
      <button onClick={() => onRemoveItem(item)}>Delete</button>
    </li>
  );
}
