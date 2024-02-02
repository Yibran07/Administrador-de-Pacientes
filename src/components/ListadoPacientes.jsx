import Paciente from "./Paciente";

const ListadoPacientes = ({ Pacientes, setModificaPaciente, EliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold text-lg">Pacientes y Citas</span>
          </p>

          {Pacientes.map(Pacientes => (
            <Paciente
              key={Pacientes.Id}
              DatosPaciente={Pacientes}
              setModificaPaciente={setModificaPaciente}
              EliminarPaciente={EliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando Pacientes {''}
            <span className="text-indigo-600 font-bold text-lg">y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
