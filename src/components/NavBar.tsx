import { Link } from 'react-router-dom'
    import { useAuth } from '../context/AuthContext'

    export default function NavBar() {
      const { currentUser } = useAuth()

      return (
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/usage">Usage</Link>
          <Link to="/account">Account</Link>
          {currentUser && <button>Logout</button>}
        </nav>
      )
    }
