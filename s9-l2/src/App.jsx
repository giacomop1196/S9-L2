import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import MyFooter from './components/MyFooter'
import BookList from './components/BookList'

function App() {


  return (
    <>
      <MyNavbar />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  )
}

export default App
