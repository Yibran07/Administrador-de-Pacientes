import {useState, useEffect} from 'react'
import Errores from './Errores';

const Formulario = ({ Pacientes, setPacientes, ModificaPaciente, setModificaPaciente }) => {


  const [Nombre, setNombre] = useState('');
  const [Propietario, setPropietario] = useState('');
  const [Email, setEmail] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Sintomas, setSintomas] = useState('');

  const [Error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(ModificaPaciente).length > 0 ){
      setNombre(ModificaPaciente.Nombre)
      setPropietario(ModificaPaciente.Propietario)
      setEmail(ModificaPaciente.Email)
      setFecha(ModificaPaciente.Fecha)
      setSintomas(ModificaPaciente.Sintomas)
    }
  }, [ModificaPaciente])

  const GenerarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDACION DE FORMULARIO
    if( [Nombre, Propietario, Email, Fecha, Sintomas].includes('') ) {
      setError(true)
      return;
    }

    setError(false)

    //OBJETO DE PACIENTE
    const ObjetoPaciente = {
      Nombre,
      Propietario,
      Email,
      Fecha,
      Sintomas
    }

    if( ModificaPaciente.Id ){
      //EDITANDO REGISTRO
      ObjetoPaciente.Id = ModificaPaciente.Id
      const PacientesActualizados = Pacientes.map( PacienteState => PacienteState.Id === ModificaPaciente.Id ? ObjetoPaciente : PacienteState )
      setPacientes(PacientesActualizados)
      setModificaPaciente({})
    } else {
      //NUEVO REGISTRO
      ObjetoPaciente.Id = GenerarId()
      setPacientes([...Pacientes, ObjetoPaciente])
    }

    //REINICIAR EL FORM
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 ">

        { Error && <Errores><p>Todos los campos son obligatorios</p></Errores>}

        <div className="mb-5">
          <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input id="Mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={Nombre} onChange={ (e) => setNombre(e.target.value)}>
          </input>
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input id="Propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Propietario} onChange={ (e) => setPropietario(e.target.value)}>
          </input>
        </div>

        <div className="mb-5">
          <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="Email" type="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Email} onChange={ (e) => setEmail(e.target.value)}>
          </input>
        </div>

        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="Alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Fecha} onChange={ (e) => setFecha(e.target.value)}>
          </input>
        </div>

        <div className="mb-5">
          <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea id="Sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Sintomas} onChange={ (e) => setSintomas(e.target.value)}>
          </textarea>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
          value={ ModificaPaciente.Id ? "Editar Paciente" : "Agregar Paciente"}>
        </input>

      </form>
    </div>
  )
}

export default Formulario
