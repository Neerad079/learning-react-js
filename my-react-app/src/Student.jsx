// props = read only properties that are shared between parent
//  and child component
function Student({ name = "Guest", age = 0, Branch = "Not selected" }) {
  return (
    <div className='student'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Branch: {Branch}</p>
      <hr></hr>
    </div>
  )
}

export default Student
