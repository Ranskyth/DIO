/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import Background from '../assets/background.png'
import "./style.css"

function App() {

  const [user, setUser] = useState('')
  const [currentUser, SetCurrentUser] = useState({})
  const [repos, setRepo] = useState({})

  const Handles = async () => {
    setRepo({})
    SetCurrentUser({})
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const userDataRepo = await fetch(`https://api.github.com/users/${user}/repos`)
    const newUser = await userData.json()
    const newRepo = await userDataRepo.json()

    if(newUser.name){
      SetCurrentUser(newUser)
      console.log(newUser)
    }

    if(newRepo.length){
      setRepo(newRepo)
      console.log(newRepo)
    }
   
  }

  return (
    <>
      <Header/>
      <div className='conteudo'>
        <img src={Background} className='background' alt="Background" />
        <div className='info'>
          <div>

            <input type="text" 
            name='usuario' 
            value={user} onChange={e => setUser(e.target.value)} 
            placeholder='@username'/>

            <button 
            onClick={Handles}>Busca</button>

            {currentUser.name ? (
              <>
                        <div className='perfil'>
                        <img className='profile_img' src={currentUser.avatar_url} alt="" />
                      <div>
                        <h3>{currentUser.name}</h3>
                        <span>@{currentUser.login}</span>
                        <p>{currentUser.bio}</p>
                      </div>
                    </div>
                    <hr />
              </>
              
            ):null}

          </div>

            {repos?.length ?(<>
              <div>
          <h4 className='repositorio'>Repositorios</h4>
 
         {repos.map((repo) => (<ItemList urlRepo={repo.html_url} title={repo.name} description={repo.description}/>))}
  
        </div></>):null}

        </div>

      </div>
    </>
  )
}

export default App
