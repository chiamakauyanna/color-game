const Button = (prop) => {
  return (
    <button onClick={prop.handleClick} className={`px-6 py-4 rounded-lg shadow-lg transition duration-300 hover:scale-110 ${prop.className}`}>
     {prop.text}
    </button>
  )
}

export default Button