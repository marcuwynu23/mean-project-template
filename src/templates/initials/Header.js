import {Link} from 'react-router-dom';
export default function Header() {
  return <div className="header">
      <nav>
          <ul>
              <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F12%2F20%2F2d%2F12202def27b0724fb11adc47f952bce1.png&f=1&nofb=1" />
              <Link className="header-item link-light" to='/'>Home</Link>
              <Link className="header-item link-light" to='/contact'>Contact</Link>
              <Link className="header-item link-light" to="/about">About</Link>
              <Link className="header-item link-light" to="/messages">Messages</Link>
              <Link className="header-item link-light" to="/chats">Chats</Link>
          </ul>
      </nav>
  </div>
}