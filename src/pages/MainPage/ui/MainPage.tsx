import { ButtonLink } from 'shared/ui/ButtonLink';
import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={classes.MainPage}>
      <h1>Добро пожаловать на сайт</h1>
      <ButtonLink to={'/form1'}>Заполнить анкету</ButtonLink>
    </div>
  );
};

export default MainPage;
