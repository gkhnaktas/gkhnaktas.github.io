import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { api } from '../api'

const fmt = (n, currency = 'USD') =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency, maximumFractionDigits: 0 }).format(n)

const fmtPct = (n) => (n >= 0 ? '+' : '') + (n * 100).toFixed(2) + '%'

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#3b82f6', '#ec4899', '#14b8a6', '#f97316', '#8b5cf6']

export default function Dashboard() {
  const [summary, setSummary] = useState(null)
  const [gl, setGl] = useState(null)
  const [holdings, setHoldings] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.getSummary(),
      api.getPortfolioGL(),
      api.getPortfolio(),
      api.getPortfolioByCategory(),
      api.getPortfolioByCode(),
    ]).then(([s, g, h, c, byCode]) => {
      setSummary(s)
      setGl(g)
      const byCodeMap = Object.fromEntries((byCode || []).map((r) => [r.code, r]))
      const merged = (h || []).map((item) => ({ ...item, ...byCodeMap[item.code] }))
      setHoldings(merged)
      setCategories(c || [])
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="loading">Yükleniyor...</div>

  const totalUsd = summary?.total_usd || 0
  const glUsd = gl?.total_gl?.usd || 0
  const unrealizedUsd = gl?.unrealized_gl?.usd || 0
  const realizedUsd = gl?.realized_gl?.usd || 0

  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-label">Toplam Değer</div>
          <div className="card-value">{fmt(totalUsd)}</div>
          <div className="card-sub">{fmt(summary?.total_try, 'TRY')} · {fmt(summary?.total_eur, 'EUR')}</div>
        </div>
        <div className="card">
          <div className="card-label">Toplam K/Z</div>
          <div className={`card-value ${glUsd >= 0 ? 'positive' : 'negative'}`}>{fmt(glUsd)}</div>
        </div>
        <div className="card">
          <div className="card-label">Gerçekleşmemiş K/Z</div>
          <div className={`card-value ${unrealizedUsd >= 0 ? 'positive' : 'negative'}`}>{fmt(unrealizedUsd)}</div>
        </div>
        <div className="card">
          <div className="card-label">Gerçekleşen K/Z</div>
          <div className={`card-value ${realizedUsd >= 0 ? 'positive' : 'negative'}`}>{fmt(realizedUsd)}</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="section">
          <div className="section-title">Kategori Dağılımı</div>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={categories}
                dataKey="value_usd"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ category, share }) => `${category} ${(share * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {categories.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => fmt(v)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="section">
          <div className="section-title">Kod Bazında K/Z</div>
          <table>
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Değer</th>
                <th>Pay</th>
                <th>K/Z</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.category}>
                  <td>{c.category}</td>
                  <td>{fmt(c.value_usd)}</td>
                  <td>{(c.share * 100).toFixed(1)}%</td>
                  <td className={c.gl_usd >= 0 ? 'positive' : 'negative'}>{fmt(c.gl_usd)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Varlıklar</div>
        <table>
          <thead>
            <tr>
              <th>Kod</th>
              <th>Lot</th>
              <th>Fiyat (TRY)</th>
              <th>Değer (USD)</th>
              <th>Pay</th>
              <th>K/Z (USD)</th>
              <th>MWROR</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h) => (
              <tr key={h.code}>
                <td>{h.code}</td>
                <td>{h.total_lot?.toLocaleString('tr-TR')}</td>
                <td>{h.price_try?.toFixed(4)}</td>
                <td>{fmt(h.value_usd)}</td>
                <td>{h.share != null ? (h.share * 100).toFixed(1) + '%' : '-'}</td>
                <td className={h.gl_usd >= 0 ? 'positive' : 'negative'}>{h.gl_usd != null ? fmt(h.gl_usd) : '-'}</td>
                <td className={h.mwror >= 0 ? 'positive' : 'negative'}>{h.mwror != null ? fmtPct(h.mwror) + '/ay' : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
