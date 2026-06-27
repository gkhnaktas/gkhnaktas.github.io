import { useEffect, useState } from 'react'
import {
  ComposedChart, AreaChart, Area, Bar, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceLine, Legend
} from 'recharts'
import { api } from '../api'

const fmt = (n) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const fmtPct = (n) => (n >= 0 ? '+' : '') + (n * 100).toFixed(2) + '%'

const monthLabel = (dateStr, isCurrent = false) => {
  const d = new Date(dateStr)
  if (!isCurrent) d.setMonth(d.getMonth() - 1)
  return d.toLocaleDateString('tr-TR', { month: 'short', year: '2-digit' })
}

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 8 }
const tickStyle = { fill: '#94a3b8', fontSize: 11 }

export default function Monthly() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getMonthly().then((rows) => {
      setData(rows || [])
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="loading">Yükleniyor...</div>

  const chartData = data.map((r, i) => ({
    label: monthLabel(r.date, i === data.length - 1),
    kazanç: r.gain > 0 ? r.gain : 0,
    kayıp: r.loss < 0 ? r.loss : 0,
    twror: r.twror * 100,
    değer: r.value_usd,
  }))

  const totalGain = data.reduce((s, r) => s + (r.gain || 0), 0)
  const totalLoss = data.reduce((s, r) => s + (r.loss || 0), 0)
  const lastValue = data[data.length - 1]?.value_usd || 0

  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-label">Son Değer (USD)</div>
          <div className="card-value">{fmt(lastValue)}</div>
        </div>
        <div className="card">
          <div className="card-label">Toplam Kazanç</div>
          <div className="card-value positive">{fmt(totalGain)}</div>
        </div>
        <div className="card">
          <div className="card-label">Toplam Kayıp</div>
          <div className="card-value negative">{fmt(totalLoss)}</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Aylık Kazanç / Kayıp (USD)</div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={chartData} margin={{ top: 8, right: 64, left: 0, bottom: 0 }}>
            <XAxis dataKey="label" tick={tickStyle} />
            <YAxis yAxisId="bar" tick={tickStyle} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <YAxis yAxisId="line" orientation="right" tick={tickStyle} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v, name) => [fmt(v), name]}
            />
            <ReferenceLine yAxisId="bar" y={0} stroke="#2e3248" />
            <Legend />
            <Bar yAxisId="bar" dataKey="kazanç" fill="#22c55e" radius={[3, 3, 0, 0]} />
            <Bar yAxisId="bar" dataKey="kayıp" fill="#ef4444" radius={[3, 3, 0, 0]} />
            <Line yAxisId="line" type="monotone" dataKey="değer" stroke="#6366f1" dot={false} strokeWidth={2} name="Değer (USD)" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <div className="section-title">Aylık TWROR (%)</div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="twrorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tick={tickStyle} />
            <YAxis tick={tickStyle} tickFormatter={(v) => v.toFixed(1) + '%'} />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v) => [v.toFixed(2) + '%', 'TWROR']}
            />
            <ReferenceLine y={0} stroke="#2e3248" />
            <Area type="monotone" dataKey="twror" stroke="#6366f1" fill="url(#twrorGrad)" strokeWidth={2} dot={false} name="TWROR %" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <div className="section-title">Aylık Detay</div>
        <table>
          <thead>
            <tr>
              <th>Dönem</th>
              <th>Değer (USD)</th>
              <th>Kazanç</th>
              <th>Kayıp</th>
              <th>TWROR</th>
            </tr>
          </thead>
          <tbody>
            {[...data].reverse().map((r, i) => (
              <tr key={r.date}>
                <td>{monthLabel(r.date, i === 0)}</td>
                <td>{fmt(r.value_usd)}</td>
                <td className="positive">{r.gain ? fmt(r.gain) : '-'}</td>
                <td className="negative">{r.loss ? fmt(r.loss) : '-'}</td>
                <td className={r.twror >= 0 ? 'positive' : 'negative'}>{fmtPct(r.twror)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
