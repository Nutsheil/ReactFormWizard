import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorModal } from 'features/ErrorModal';
import { $api } from 'shared/api/api';
import { routePaths } from 'shared/config/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Form } from 'shared/ui/Form';
import { Input } from 'shared/ui/Input';
import { IOption, Select } from 'shared/ui/Select';
import { Button } from 'shared/ui/Button';
import { getForm2PlaceOfWork } from '../model/selectors/getForm2PlaceOfWork';
import { getForm2Address } from '../model/selectors/getForm2Address';
import { form2Actions } from '../model/slice/form2Slice';
import classes from './Form2Page.module.scss';

const Form2Page = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const placeOfWork = useSelector(getForm2PlaceOfWork);
  const address = useSelector(getForm2Address);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [placeOfWorkOptions, setPlacesOfWorkOptions] = useState<IOption[]>([]);

  useEffect(() => {
    $api
      .get<string[]>('/products/category-list')
      .then(response => {
        setPlacesOfWorkOptions(
          response.data.map((place, index) => ({
            value: index.toString(),
            label: place,
          })),
        );
      })
      .catch(error => {
        console.log(error);
        setErrorText('Ошибка загрузки данных');
        setIsErrorModalOpen(true);
      });
  }, []);

  const onChangePlaceOfWork = useCallback((value: string) => {
    dispatch(form2Actions.setPlaceOfWork(Number(value)));
  }, []);

  const onChangeAddress = useCallback((value: string) => {
    dispatch(form2Actions.setAddress(value));
  }, []);

  const handleSubmit = useCallback(() => {
    if (address === '' || placeOfWork === undefined) {
      setErrorText('Все поля должны быть заполнены');
      setIsErrorModalOpen(true);
    } else {
      navigate(routePaths.form3);
    }
  }, [placeOfWork, address]);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  const onCloseErrorModal = useCallback(() => {
    setIsErrorModalOpen(false);
  }, []);

  return (
    <div className={classes.Form2Page}>
      <Form header='Адрес и место работы'>
        <Select
          placeholder='Место работы'
          value={placeOfWork?.toString()}
          onChange={onChangePlaceOfWork}
          options={placeOfWorkOptions}
        />
        <Input placeholder='Адрес проживания' value={address} onChange={onChangeAddress} />
        <div className={classes.buttons}>
          <Button onClick={handleGoBack}>Назад</Button>
          <Button onClick={handleSubmit}>Далее</Button>
        </div>
      </Form>
      <ErrorModal isOpen={isErrorModalOpen} onClose={onCloseErrorModal} text={errorText} />
    </div>
  );
};

export default Form2Page;
