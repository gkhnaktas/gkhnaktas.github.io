import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Callback from './pages/Callback'
import Dashboard from './pages/Dashboard'
import Monthly from './pages/Monthly'
import Daily from './pages/Daily'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/dashboard" element={
          <ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>
        } />
        <Route path="/monthly" element={
          <ProtectedRoute><Layout><Monthly /></Layout></ProtectedRoute>
        } />
        <Route path="/daily" element={
          <ProtectedRoute><Layout><Daily /></Layout></ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
