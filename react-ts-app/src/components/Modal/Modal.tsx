import { Dispatch, ReactElement, SetStateAction } from 'react';
import './Modal.css';

type ModalProps = {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  child: ReactElement;
};

export const Modal = function Modal(props: ModalProps) {
  const { isModal, setIsModal, child } = props;
  const showHideModal = isModal ? 'overlay show' : 'overlay';
  return (
    <div className={showHideModal}>
      <div className="modal">
        <span className="modal__close" onClick={() => setIsModal(false)}></span>
        <div className="modal__content">{child}</div>
      </div>
    </div>
  );
};
