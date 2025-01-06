import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import { AuthProvider } from './context/AuthContext'
    import ProtectedRoute from './components/ProtectedRoute'
    import Dashboard from './pages/Dashboard'
    import Login from './pages/Login'
    import Signup from './pages/Signup'
    import Subscription from './pages/Subscription'
    import Usage from './pages/Usage'
    import Account from './pages/Account'
    import NavBar from './components/NavBar'

    function App() {
      return (
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/account" element={<Account />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      )
    }

    export default App
