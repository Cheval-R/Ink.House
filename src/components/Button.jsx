const Button = ({ modifier, children }) => {
  return (
    <button className={`button ${modifier ?? ''}`}>{children}</button>
  );
};

export default Button;