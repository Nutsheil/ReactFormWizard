import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { FinalModal } from 'features/FinalModal';
import { ErrorModal } from 'features/ErrorModal';
import { getForm1FirstName } from 'pages/Form1Page/model/selectors/getForm1FirstName';
import { getForm1LastName } from 'pages/Form1Page/model/selectors/getForm1LastName';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { $api } from 'shared/api/api';
import {
  MAX_LOAN_AMOUNT,
  MAX_LOAN_TERM,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_TERM,
  STEP_LOAN_AMOUNT,
  STEP_LOAN_TERM,
} from 'shared/const/loan';
import { Form } from 'shared/ui/Form';
import { Slider } from 'shared/ui/Slider';
import { Button } from 'shared/ui/Button';
import { getForm3LoanAmount } from '../model/selectors/getForm3LoanAmount';
import { getForm3LoanTerm } from '../model/selectors/getForm3LoanTerm';
import { form3Actions } from '../model/slice/form3Slice';
import classes from './Form3Page.module.scss';

const Form3Page = () => {
  const dispatch = useAppDispatch();
  const loanAmount = useSelector(getForm3LoanAmount);
  const loanTerm = useSelector(getForm3LoanTerm);

  const firstName = useSelector(getForm1FirstName);
  const lastName = useSelector(getForm1LastName);

  const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const onChangeLoanAmount = useCallback((value: number) => {
    dispatch(form3Actions.setLoanAmount(value));
  }, []);

  const onChangeLoanTerm = useCallback((value: number) => {
    dispatch(form3Actions.setLoanTerm(value));
  }, []);

  const handleSubmit = useCallback(() => {
    $api
      .post('/products/add', { title: firstName + ' ' + lastName })
      .then(() => setIsFinalModalOpen(true))
      .catch(error => {
        console.log(error);
        setIsErrorModalOpen(true);
      });
  }, [loanAmount, loanTerm]);

  const onCloseErrorModal = useCallback(() => {
    setIsErrorModalOpen(false);
  }, []);

  const onCloseFinalModal = useCallback(() => {
    setIsFinalModalOpen(false);
  }, []);

  return (
    <div className={classes.Form3Page}>
      <Form header='Параметры займа'>
        <div className={classes.sliderBlock}>
          <div className={classes.name}>Сумма займа:</div>
          <div className={classes.sliderArea}>
            <Slider
              value={loanAmount}
              onChange={onChangeLoanAmount}
              min={MIN_LOAN_AMOUNT}
              max={MAX_LOAN_AMOUNT}
              step={STEP_LOAN_AMOUNT}
            />
            <span>{loanAmount + '$'}</span>
          </div>
        </div>
        <div className={classes.sliderBlock}>
          <div className={classes.name}>Срок займа (дней):</div>
          <div className={classes.sliderArea}>
            <Slider
              value={loanTerm}
              onChange={onChangeLoanTerm}
              min={MIN_LOAN_TERM}
              max={MAX_LOAN_TERM}
              step={STEP_LOAN_TERM}
            />
            <span>{loanTerm}</span>
          </div>
        </div>
        <Button onClick={handleSubmit}>Подать заявку</Button>
      </Form>
      <FinalModal isOpen={isFinalModalOpen} onClose={onCloseFinalModal} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={onCloseErrorModal} text={'Ошибка отправки данных'} />
    </div>
  );
};

export default Form3Page;
