function UserGreeting({ isLoggedIn = false, name = "Guest" }) {
  return (isLoggedIn ? <h2 className='welcome'>Welcome {name} </h2>
                     : <h2 className='login'>Please Login to Continue</h2>);
}
export default UserGreeting
