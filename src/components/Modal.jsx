import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarmodal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500);
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

        <form className={`formulario ${animarmodal ? "animar" : ''}`}>
            <legend>Nuevo Gasto</legend>
        </form>
    </div>
  )
}

export default Modal