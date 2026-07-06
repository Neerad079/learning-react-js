import dp from './assets/Daniel Park.jpg'
function Card() {
  return (
    <div className='card'>
      <img className='daniel' src={dp}></img>
      <p> description of the card</p>
  </div>
)
}
export default Card