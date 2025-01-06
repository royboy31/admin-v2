import { useState } from 'react'
    import { signInWithEmailAndPassword } from 'firebase/auth'
    import { auth } from '../firebase'
    import { useNavigate } from 'react-router-dom'

    export default function Login() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const navigate = useNavigate()

      const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          await signInWithEmailAndPassword(auth, email, password)
          navigate('/')
        } catch (error) {
          setError('Failed to log in')
        }
      }

      return (
        <div>
          <h1>Login</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )
    }
