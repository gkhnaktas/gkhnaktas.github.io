import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Callback() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      localStorage.setItem('token', token)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        if (payload.sub) localStorage.setItem('email', payload.sub)
      } catch (e) {}
      navigate('/dashboard', { replace: true })
    } else {
      navigate('/', { replace: true })
    }
  }, [navigate])

  return <div className="loading">Giriş yapılıyor...</div>
}
