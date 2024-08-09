import { Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getForm1FirstName } from 'pages/Form1Page/model/selectors/getForm1FirstName';
import { getForm1LastName } from 'pages/Form1Page/model/selectors/getForm1LastName';
import { getForm3LoanAmount } from 'pages/Form3Page/model/selectors/getForm3LoanAmount';
import { getForm3LoanTerm } from 'pages/Form3Page/model/selectors/getForm3LoanTerm';
import { form1Actions } from 'pages/Form1Page/model/slice/form1Slice';
import { form2Actions } from 'pages/Form2Page/model/slice/form2Slice';
import { form3Actions } from 'pages/Form3Page/model/slice/form3Slice';
import { routePaths } from 'shared/config/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { Button } from 'shared/ui/Button';
import classes from './FinalModal.module.scss';

interface ILoginModal {
  isOpen: boolean;
  onClose: () => void;
}

export const FinalModal = (props: ILoginModal) => {
  const { isOpen, onClose } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const firstName = useSelector(getForm1FirstName);
  const lastName = useSelector(getForm1LastName);
  const loanAmount = useSelector(getForm3LoanAmount);
  const loanTerm = useSelector(getForm3LoanTerm);

  const handleSubmit = useCallback(() => {
    dispatch(form1Actions.clearData());
    dispatch(form2Actions.clearData());
    dispatch(form3Actions.clearData());
    onClose();
    navigate(routePaths.main);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <div className={classes.FinalModal}>
          <h2>
            Поздравляем, {lastName} {firstName}.
          </h2>
          <h3>
            Вам одобрена {loanAmount}$ на {loanTerm} дней.
          </h3>
          <Button onClick={handleSubmit}>Вернуться на главную</Button>
        </div>
      </Suspense>
    </Modal>
  );
};
