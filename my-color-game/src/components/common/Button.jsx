import "../../styles/Button.css"; 

const Button = (prop) => {
  return (
    <button 
      onClick={prop.handleClick} 
      data-testid={prop.datatestid}
      className={`custom-button ${prop.className}`}
    >
      {prop.text}
    </button>
  );
};

export default Button;
