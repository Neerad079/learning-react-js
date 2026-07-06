
function Button() {
  // const handleClick = () => console.log('Hello');      ->function without parameter

  // const handleClick2 = (name) => console.log('Hello ' + name);    ->function with a parameter

  //  let count = 0;
  // const handleClick3 = (name) => {                       -> function with conditions

  //   if (count < 3) {

  //     console.log("Hey " + name + " you clicked me !")
  //     count++;
  //   }
  //   else {
  //     console.log("Hey " + name + " stop clicking me");

  //   }

  const handleClick4 = (e) => e.target.textContent="Hello !"          //-> function with event type as parameter
  // }
  // if the callback function has an argument then we'll need to wrap it
  // in a arrow function so that it doesn't automatically invoke itself
  return (
    <button onClick={(e)=>handleClick4(e)}>Click Me</button>
  )
}
export default Button;