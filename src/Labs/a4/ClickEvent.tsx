function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };
  const pet = () =>{
    alert('you pet the dog!');
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={hello}>
        Click Hello</button>
      <button onClick={() => lifeIs("Good!")}>
        Click Good</button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
      >
        Click Hello 3
      </button>
      <button onClick={pet}>
        Pet The Dog?
      </button>
    </div>
  );
}
export default ClickEvent;

