import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='Listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

        {gastos.map( (gasto) => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos