import { useState } from 'react'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { auth } from '../firebase'
    import { useNavigate } from 'react-router-dom'

    export default function Signup() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const navigate = useNavigate()

      const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          navigate('/')
        } catch (error) {
          setError('Failed to create account')
        }
      }

      return (
        <div>
          <h1>Sign Up</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSignup}>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )
    }
