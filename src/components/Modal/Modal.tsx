import React from 'react';

interface ModalPorps {
  children: React.ReactNode,
  title: string,
  onClose: () => void,
}

const Modal = ({ children, title, onClose } : ModalPorps) => {
  return (
    <>
    <div style={{backgroundColor: "rgba(0, 0, 0, .5)", position: "fixed", top: 0, right: 0, left: 0, bottom: 0}} onClick={onClose} />
    <div style={{width: "500px", padding: "25px", background: "white", position: "absolute", top: "30%", left: "40%", borderRadius: "15px"}}>
      <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>{ title }</h1>
      { children }
    </div>
    </>
  )
}

export default Modal;