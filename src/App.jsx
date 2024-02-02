import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() { 

  const [Pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('Pacientes')) ?? []);
  const [ModificaPaciente, setModificaPaciente] = useState({});


  useEffect( () => {
    localStorage.setItem('Pacientes', JSON.stringify( Pacientes ))
  }, [Pacientes])

  const EliminarPaciente = Id => {
    const PacientesActualizados = Pacientes.filter( ModificaPaciente => ModificaPaciente.Id !== Id)
    setPacientes(PacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          Pacientes={Pacientes}
          setPacientes={setPacientes}
          ModificaPaciente={ModificaPaciente}
          setModificaPaciente={setModificaPaciente}
        />
        <ListadoPacientes 
          Pacientes={Pacientes}
          setModificaPaciente={setModificaPaciente}
          EliminarPaciente={EliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App