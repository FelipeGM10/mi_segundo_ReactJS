import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './components/Feed';

function App() {

  return (
   <div className="bg-dark min-vh-100 py-4">
    <div className='container'>
      <h1 className="text-center mb-4 text-light">Series más populares</h1>
      <h2 className='text-danger'>Nesflis</h2>
      <Feed />
    </div>
   </div>
  )
}

export default App
