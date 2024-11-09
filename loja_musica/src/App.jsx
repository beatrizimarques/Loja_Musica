import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './assets/components/menu.jsx'
import Main from './assets/components/main.jsx'
import Store from './assets/components/store.jsx'
import Place from './assets/components/place.jsx'
import Forms from './assets/components/forms.jsx'
import Footer from './assets/components/footer.jsx'
import './App.css'

function App() {


  return (
    <>

      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='Store' element={<Store/>}/>
            <Route path='Place' element={<Place/>}/>
            <Route path='Forms' element={<Forms/>}/>
          </Routes>
          <Footer></Footer>
      </Router>


    </>
  )
}

export default App
