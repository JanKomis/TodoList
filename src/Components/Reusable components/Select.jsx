export default function Select({ options, onChange, defaultValue }) {
  return (
    <select
      onChange={(event) => onChange(event)}
      defaultValue={defaultValue}
    >
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
