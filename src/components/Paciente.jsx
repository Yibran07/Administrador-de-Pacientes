
const Paciente = ({ DatosPaciente, setModificaPaciente, EliminarPaciente }) => {

    const { Nombre, Propietario, Email, Fecha, Sintomas, Id } = DatosPaciente

    const handleEliminar = () => {
        const Respuesta = confirm('¿Deseas eliminar ese paciente?')

        if( Respuesta ) {
            EliminarPaciente(Id)
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 my-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{Nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{Propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{Email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{Fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{Sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setModificaPaciente(DatosPaciente)}>Editar
                </button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}>Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
