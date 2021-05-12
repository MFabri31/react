import React from "react";
import Modal from "./Modal";
import { useModal } from "../Hooks/useModal";
import ContactForm from "./ContactForm";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h3>Modales</h3>
      <button onClick={openModal1}>Modal 1</button>
      <button onClick={openModal2}>Modal 2</button>
      <button onClick={openModalContact}>Modal Contact</button>
      <button onClick={openModalPortal}>Modal Portal</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h1>Modal 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ipsum dolorum quidem repellat tempore praesentium quae iure explicabo
          eveniet sit distinctio sequi adipisci eligendi amet, sapiente a nulla
          cupiditate quia, voluptate debitis. Dignissimos dicta in blanditiis
          cupiditate sapiente, asperiores, distinctio et, veritatis amet
          reiciendis officia ipsum est dolores? Quae, delectus rem quis
          cupiditate quaerat illum animi blanditiis reprehenderit dicta,
          mollitia id. Ad dolorum totam aut tenetur fugiat dolores optio eveniet
          fuga placeat aliquid rerum blanditiis itaque ipsam enim unde veniam
          veritatis obcaecati reiciendis molestias voluptatum voluptatem autem
          cum, eligendi quo! Quas error deserunt mollitia sapiente praesentium
          quasi doloribus aperiam. Illo, incidunt!
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="modal-image" />
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <h1>Modal 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iusto consequatur rem veritatis ratione. In animi nam cupiditate, cum
          nihil veniam eius tenetur quae, quia et facere molestiae omnis eos.
        </p>
        <img src="https://placeimg.com/400/400/animals" alt="modal-image" />
      </Modal>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h1>Modal en Portal</h1>
        <p>
          Contenido de modal que carga en otro nodo del DOM diferente a donde
          carga la app de React.
        </p>
        <img src="https://placeimg.com/400/400/people" alt="modal-image" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
