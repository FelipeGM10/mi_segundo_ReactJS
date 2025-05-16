import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './components/Feed';

function App() {

  return (
   <div className="bg-light min-vh-100 py-4">
    <div className='container'>
      <h1 className="text-center mb-4">Social Feed</h1>
      <Feed />
    </div>
   </div>
  )
}

export default App
