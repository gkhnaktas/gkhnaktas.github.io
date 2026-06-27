import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard')
  }, [navigate])

  async function handleLogin() {
    setLoading(true)
    const data = await api.getLoginUrl()
    if (data?.url) window.location.href = data.url
    else setLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Portföy</h1>
        <p>Devam etmek için Google hesabınla giriş yap</p>
        <button className="btn-google" onClick={handleLogin} disabled={loading}>
          {loading ? 'Yönlendiriliyor...' : 'Google ile Giriş Yap'}
        </button>
      </div>
    </div>
  )
}
