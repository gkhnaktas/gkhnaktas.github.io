import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell
} from 'recharts'
import { api } from '../api'

const fmt = (n) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const dayLabel = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' })
}

export default function Daily() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getDaily().then((rows) => {
      setData(rows || [])
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="loading">Yükleniyor...</div>

  const chartData = data.map((r) => ({
    label: dayLabel(r.date),
    gl: r.total_gl_usd,
    date: r.date,
  }))

  const totalGl = data.reduce((s, r) => s + r.total_gl_usd, 0)
  const bestDay = data.reduce((best, r) => r.total_gl_usd > (best?.total_gl_usd ?? -Infinity) ? r : best, null)
  const worstDay = data.reduce((worst, r) => r.total_gl_usd < (worst?.total_gl_usd ?? Infinity) ? r : worst, null)

  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-label">Son 21 Gün K/Z</div>
          <div className={`card-value ${totalGl >= 0 ? 'positive' : 'negative'}`}>{fmt(totalGl)}</div>
        </div>
        <div className="card">
          <div className="card-label">En İyi Gün</div>
          <div className="card-value positive">{bestDay ? fmt(bestDay.total_gl_usd) : '-'}</div>
          <div className="card-sub">{bestDay ? dayLabel(bestDay.date) : ''}</div>
        </div>
        <div className="card">
          <div className="card-label">En Kötü Gün</div>
          <div className="card-value negative">{worstDay ? fmt(worstDay.total_gl_usd) : '-'}</div>
          <div className="card-sub">{worstDay ? dayLabel(worstDay.date) : ''}</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Günlük Kazanç / Kayıp (USD)</div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`} />
            <Tooltip
              contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 8 }}
              formatter={(v) => [fmt(v), 'K/Z']}
            />
            <ReferenceLine y={0} stroke="#2e3248" />
            <Bar dataKey="gl" radius={[3, 3, 0, 0]}>
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.gl >= 0 ? '#22c55e' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <div className="section-title">Günlük Detay</div>
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>K/Z (USD)</th>
            </tr>
          </thead>
          <tbody>
            {[...data].reverse().map((r) => (
              <tr key={r.date}>
                <td>{dayLabel(r.date)}</td>
                <td className={r.total_gl_usd >= 0 ? 'positive' : 'negative'}>{fmt(r.total_gl_usd)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
