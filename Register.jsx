export default function Register() {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();
  
    const handleRegister = () => {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registered successfully!');
      navigate('/login');
    };
  
    return (
      <div className="p-4">
        <h2>Register</h2>
        <input type="email" placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  }
  