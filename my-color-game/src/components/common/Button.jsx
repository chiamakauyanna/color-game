import "../../styles/Button.css"; 

const Button = (prop) => {
  return (
    <button 
      onClick={prop.handleClick} 
      className={`custom-button ${prop.className}`}
    >
      {prop.text}
    </button>
  );
};

export default Button;
