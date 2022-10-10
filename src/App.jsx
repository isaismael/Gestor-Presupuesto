import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { generarId } from './helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarmodal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([])

  const handleNueboGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto])
    
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
  }, 500);

  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNueboGasto}
          />
        </div>
      )}
      {modal && <Modal 
      setModal={setModal}
      animarmodal={animarmodal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
