const Input = ({ label, id, error, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
