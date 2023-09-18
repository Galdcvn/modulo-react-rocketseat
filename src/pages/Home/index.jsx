import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../../components/card'


function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudent] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{hour: '2-digit', minute: '2-digit', second: '2-digit',})
    }

    setStudent(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Galdcvn')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    fetchData()    
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <hr />      
      <input type="text" placeholder="insira algo aqui" onChange={e => setStudentName(e.target.value)} />
      <button onClick={handleAddStudent}>Enviar</button>

      {students.map(student => <Card key={student.time} name={student.name} time={student.time}/>)}       
    </div>
  )
}

export default Home
