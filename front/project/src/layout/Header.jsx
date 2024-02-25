import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import logo from '../data/Web/logo1.png'

const guestNav = [
  { to : '/', text: 'Home' },
  { to : '/register', text: 'Register' },
  { to : '/login', text: 'Login' },
]

const userNav = [
  { to : '/', text: 'Home' },
  { to : '/new', text: 'Add Restaurant' },
  { to : '/edit', text: 'List Restaurant' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav
  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-white border-b-2" >
      <div className="flex-1">
      <Link to="/"><img src={logo} alt="logo" width={120} height={50}/></Link>
      </div>
      <div className="flex-none">
      <a className="btn btn-ghost text-xl">{user?.id ? user.username : 'Guest'}</a>
      <input type="checkbox" value="dark" className="toggle theme-controller"/>
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}