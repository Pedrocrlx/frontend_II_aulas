const Button = () => {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <>
      <button
        className="font-bold m-10 p-10 text-2xl bg-blue-500 rounded-4xl cursor-pointer hover:bg-blue-800"
        onClick={handleClick}
      >
        Click here
      </button>
    </>
  );
};

export default Button;
