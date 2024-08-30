import { Link } from 'react-router-dom';

import { useAuth } from './components/AuthProvider';

export default function App() {
  const { authToken, handleLogin, handleLogout } = useAuth();

  return (
    <div className="my-4 flex flex-col">
      <h1 className="text-2xl font-bold">Cosden Solutions</h1>

      <div className="my-4 flex flex-col">
        <Link to="/use-effect">Demo useEffect</Link>
        <Link to="/use-state">Demo useState</Link>
      </div>

      <Link className="my-4" to="/protected">
        Very Protected Route. Must be logged in.
      </Link>

      {authToken ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
