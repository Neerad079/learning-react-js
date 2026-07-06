function List(props) {
  const itemlist = props.items // accessing fruit list through props.items
  // const filterFruits = fruits.filter(fruit => fruit.id === 2);
  const list = itemlist.map(fruit =>
                                  <li key={fruit.id}>
                                   {fruit.name}: &nbsp;
                                   { fruit.id}
                                  </li>);
  // remember to enclose fruit inside {} as it is a JS code

  return (
    <>
      <h2>{props.category}</h2>
    <ul>
      {list}
      </ul>
    </>
  )
}
export default List;