import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell
} from 'recharts'
import { api } from '../api'

const fmt = (n) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const fmtCompact = (n) => {
  const abs = Math.abs(n)
  const str = abs >= 1000
    ? `$${(abs / 1000).toFixed(1)}k`
    : `$${abs.toFixed(0)}`
  return n < 0 ? `-${str}` : str
}

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
  }))

  const codes = data.length > 0
    ? Object.keys(data[0].by_code).sort()
    : []

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
        <ResponsiveContainer width="100%" height={260}>
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
        <div className="section-title">Kod Bazında Günlük K/Z</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ minWidth: `${(codes.length + 2) * 90}px` }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Tarih</th>
                {codes.map((c) => <th key={c}>{c}</th>)}
                <th>Toplam</th>
              </tr>
            </thead>
            <tbody>
              {[...data].reverse().map((r) => (
                <tr key={r.date}>
                  <td style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{dayLabel(r.date)}</td>
                  {codes.map((c) => {
                    const v = r.by_code[c] ?? 0
                    return (
                      <td key={c} className={v > 0 ? 'positive' : v < 0 ? 'negative' : ''}>
                        {fmtCompact(v)}
                      </td>
                    )
                  })}
                  <td className={r.total_gl_usd >= 0 ? 'positive' : 'negative'} style={{ fontWeight: 600 }}>
                    {fmtCompact(r.total_gl_usd)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
