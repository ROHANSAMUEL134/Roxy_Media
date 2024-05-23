
const Header = ({title}) => {
  return (
    <header className="Header">
        <h1>{title}</h1>
        <div className="logo-container">
          <img src="roxy_media.png" alt="Logo" className="logo"/>
        </div>
    </header>
  )
}

export default Header