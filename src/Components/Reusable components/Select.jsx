export default function Select({ options, onChange, value }) {
  return (
    <select
      onChange={(event) => onChange(event)}
      value={value}
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
