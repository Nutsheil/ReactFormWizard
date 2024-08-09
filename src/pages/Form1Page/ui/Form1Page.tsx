import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorModal } from 'features/ErrorModal';
import { routePaths } from 'shared/config/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { genders } from 'shared/const/gender';
import { Form } from 'shared/ui/Form';
import { Input } from 'shared/ui/Input';
import { IOption, Select } from 'shared/ui/Select';
import { Button } from 'shared/ui/Button';
import { getForm1FirstName } from '../model/selectors/getForm1FirstName';
import { getForm1LastName } from '../model/selectors/getForm1LastName';
import { getForm1PhoneNumber } from '../model/selectors/getForm1PhoneNumber';
import { getForm1Gender } from '../model/selectors/getForm1Gender';
import { form1Actions } from '../model/slice/form1Slice';
import classes from './Form1Page.module.scss';

const genderOptions: IOption[] = genders.map(gender => ({
  value: gender.id.toString(),
  label: gender.name,
}));

const Form1Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const firstName = useSelector(getForm1FirstName);
  const lastName = useSelector(getForm1LastName);
  const phoneNumber = useSelector(getForm1PhoneNumber);
  const gender = useSelector(getForm1Gender);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(form1Actions.setFirstName(value));
  }, []);

  const onChangeLastName = useCallback((value: string) => {
    dispatch(form1Actions.setLastName(value));
  }, []);

  const onChangePhoneNumber = useCallback((value: string) => {
    dispatch(form1Actions.setPhoneNumber(value));
  }, []);

  const onChangeGender = useCallback((value: string) => {
    dispatch(form1Actions.setGender(Number(value)));
  }, []);

  const handleSubmit = useCallback(() => {
    if (firstName === '' || lastName === '' || phoneNumber.length !== 18 || gender === undefined)
      setIsErrorModalOpen(true);
    else navigate(routePaths.form2);
  }, [firstName, lastName, phoneNumber, gender]);

  const onCloseErrorModal = useCallback(() => {
    setIsErrorModalOpen(false);
  }, []);

  return (
    <div className={classes.Form1Page}>
      <Form header='Личные данные'>
        <Input placeholder='Имя' value={firstName} onChange={onChangeFirstName} />
        <Input placeholder='Фамилия' value={lastName} onChange={onChangeLastName} />
        <Input type='tel' placeholder='Телефон' value={phoneNumber} onChange={onChangePhoneNumber} />
        <Select placeholder='Пол' value={gender?.toString()} onChange={onChangeGender} options={genderOptions} />
        <Button onClick={handleSubmit}>Далее</Button>
      </Form>
      <ErrorModal isOpen={isErrorModalOpen} onClose={onCloseErrorModal} text='Все поля должны быть заполнены' />
    </div>
  );
};

export default Form1Page;
