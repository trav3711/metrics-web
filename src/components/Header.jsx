import logo from '../content/logo.png'

function Header(props) {
  return (
    <header className="headerContainer" style={{backgroundColor: "black", height: "100px", width: "auto"}}>
      <img src={logo} alt="header" height={'100px'}/>
    </header>
  )
}

export default Header;
