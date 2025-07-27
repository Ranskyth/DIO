/* eslint-disable no-unused-vars */
import Home from "./pages/home"
import Login from "./pages/login"
import Feed from "./pages/feed"
import Test from "./Test.js"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Cadastro } from "./pages/cadastro"
import { AuthContexProvider } from "./context/Auth"

function App() {

  return (
    <>
    <BrowserRouter>
      <AuthContexProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/teste" element={<Test/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </AuthContexProvider>
    </BrowserRouter>
    </>
  )
}

export default App
