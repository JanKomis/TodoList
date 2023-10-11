export default function Select({ options, onChange }) {
  return (
    <select onChange={(event) => onChange(event.target.value)}>
      {options.map((item, index) => {
        return (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        );
      })}
    </select>
  );
}
