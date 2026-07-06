import React, { useState } from 'react';
function MyComponent() {
  // here name is a stateful variable and setName is setter function
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);
  const[isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("Neerad")
  }

  const incrementAge = () => {
    setAge(age+1);
  }
  const toggleStatus = () => {
    isEmployed ? setIsEmployed(false) : setIsEmployed(true);
  }

  return (
    <div>
      <p>Name:{name} </p>
      <button onClick={updateName}  >setName</button>

      <p>Age:{age} </p>
      <button onClick={incrementAge}  >increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"} </p>
      <button onClick={toggleStatus}  >toggle Status</button>
    </div>
  )
}
export default MyComponent;