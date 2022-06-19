import logo from './logo.svg';
import './App.css';
import Navbar_atul from './component/Navbar_atul';
import Atul_signup from './component/Atul_signup';
function App() {
  return (
    <>
        <Navbar_atul />
      <div className='container'>
        <Atul_signup />
      </div>
    </>
  );
}

export default App;
