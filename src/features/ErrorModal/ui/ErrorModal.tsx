import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import classes from './ErrorModal.module.scss';

interface IErrorModal {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

export const ErrorModal = memo((props: IErrorModal) => {
  const { isOpen, onClose, text } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <div className={classes.ErrorModal}>
          <h3>{text}</h3>
          <Button className={classes.button} onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </Suspense>
    </Modal>
  );
});
ErrorModal.displayName = 'ErrorModal';
