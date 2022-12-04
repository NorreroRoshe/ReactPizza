import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import CreateModul from '../components/Modal/CreateModul';

const MainLayout: React.FC = () => {
  const [modal, setModal] = React.useState(false);

  const inCreateHandler = () => {
    setModal(false);
  }

  const onOpen = () => {
    setModal(true);
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="content"><Outlet /></div>
    { modal && <Modal title='Create new product' onClose={inCreateHandler}>
    <CreateModul onCreate={inCreateHandler} />
  </Modal>}
  <button style={{position: 'fixed', bottom: '50px', right: '50px', background: 'red', color: 'white', padding: '7px', borderRadius: '100%', width: '59px', fontSize: '30px', cursor: 'pointer'}}
  onClick={onOpen} >
  +
  </button>
    </div>
  )
}

export default MainLayout;