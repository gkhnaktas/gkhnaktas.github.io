import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const email = localStorage.getItem('email')

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <span className="navbar-brand">Portföy</span>
      <NavLink to="/dashboard">Genel</NavLink>
      <NavLink to="/monthly">Aylık</NavLink>
      <NavLink to="/daily">Günlük</NavLink>
      <div className="navbar-spacer" />
      {email && <span className="navbar-email">{email}</span>}
      <button className="navbar-logout" onClick={logout}>Çıkış</button>
    </nav>
  )
}
