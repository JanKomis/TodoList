export default function Input({
  children,
  value,
  onChange,
  withLabel = true,
  placeholder = "",
  maxLength = "50",
  defaultValue,
}) {
  return (
    <>
      {withLabel && <label htmlFor="titleInput">{children}</label>}
      <input
        id="titleInput"
        type="text"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        maxLength={maxLength}
      />
    </>
  );
}
