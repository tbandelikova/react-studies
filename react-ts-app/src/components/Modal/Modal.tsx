import { ModalProps } from '../../types/types';
import './Modal.css';

export const Modal = function Modal(props: ModalProps) {
  const { isModal, setIsModal, child } = props;
  const showHideModal = isModal ? 'overlay show' : 'overlay';
  return (
    <div role="modal" className={showHideModal}>
      <div className="modal">
        <span className="modal__close" onClick={() => setIsModal(false)}></span>
        <div className="modal__content">{child}</div>
      </div>
    </div>
  );
};
