const API_URL = import.meta.env.VITE_API_URL

function getToken() {
  return localStorage.getItem('token')
}

async function apiFetch(path, options = {}) {
  const token = getToken()
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  if (res.status === 401) {
    localStorage.removeItem('token')
    window.location.hash = '/'
    return null
  }
  return res.json()
}

export const api = {
  getLoginUrl: () => apiFetch('/auth/login'),
  getSummary: () => apiFetch('/portfolio/summary'),
  getPortfolio: () => apiFetch('/portfolio'),
  getPortfolioGL: () => apiFetch('/portfolio/gl'),
  getPortfolioByCategory: () => apiFetch('/portfolio/by_category'),
  getPortfolioByCode: () => apiFetch('/portfolio/by_code'),
  getMonthly: () => apiFetch('/monthly'),
  getDaily: () => apiFetch('/daily'),
}
