export default function Select({ options, onChange, value, className }) {
  return (
    <select className={className}
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
