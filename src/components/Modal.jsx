import { useState } from 'react'
import Mensaje from './Mensaje'

import CerrarBtn from '../img/cerrar.svg'


const Modal = ({ setModal, animarmodal, setAnimarModal, guardarGasto }) => {

    const[mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [cantegoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);


    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([ nombre, cantidad, cantegoria ].includes('') ){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return
        }
        guardarGasto({nombre, cantidad, cantegoria})
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
            onSubmit={handleSubmit}
                className={`formulario ${animarmodal ? "animar" : ''}`}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                {/*  */}
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                {/*  */}
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto: ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                {/*  */}
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={cantegoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="añadir Gasto"
                />
            </form>
        </div>
    )
}

export default Modal