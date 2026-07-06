
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Manwha from './Manwhas.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
function App() {
  const fruits = [{id: 1, name: "orange" },
                  {id: 2,name: 'apple'},
                  {id: 3,name:'banana'},
                  {id: 4,name:'kiwi'},
                  {id: 5,name:'strawberry'}];
 const vegtables=[{id: 6, name: "potato" },
                  {id: 7, name: 'eggplant'},
                  {id: 8, name:'ladyfinger'},
                  {id: 9, name:'peas'},
                  {id: 10, name:'lauki'}];
  return (
    <>

      {/* <List items={vegtables} category="Vegtables" ></List>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" ></List> : <p>List is Empty</p>} */}
      <Button></Button>
    </>
)
}

export default App
