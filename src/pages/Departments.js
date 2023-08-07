import { getDepartmentsInfo } from 'Api/apiServices';
import DepartmentsList from 'components/DepartmentsList/DepartmentsList';
import Loader from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Button, Container } from 'styles/Element.styled';

const Departments = () => {
  const [city, setCity] = useState('');
  const [departments, setDepartments] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setCity(searchForm.elements.city.value);
    setPage(1);
    setDepartments([]);
    setIsLoading(true);
    setTotal(0);
  };

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (city === '') {
      return Notiflix.Notify.info(
        'Будь ласка, введіть назву населеного пункту'
      );
    }
    getDepartmentsInfo(city, page).then(data => {
      const list = data.data;

      if (list.length === 0) {
        setIsLoading(false);
        return Notiflix.Notify.info(
          'Нажаль ми не маємо інформації. Перевірте вірність назви населеного пункту.'
        );
      }

      setIsLoading(false);

      setDepartments(prevState => [...prevState, ...data.data]);

      const { totalCount } = data.info;
      setTotal(totalCount);
    });
  }, [city, page]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <DepartmentsList city={city} isLoading={isLoading} items={departments} />
      {departments.length > 0 && total > departments.length && (
        <Button onClick={onClickLoadMore}>LoadMore</Button>
      )}
    </Container>
  );
};

export default Departments;
