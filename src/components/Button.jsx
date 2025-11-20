const Button = ({ classModifiers, children, onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${classModifiers ?? ''}`}
      value={value}
    >{children}</button>
  );
};

export default Button;