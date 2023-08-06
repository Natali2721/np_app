import { getDepartmentsInfo } from 'Api/apiServices';
import DepartmentsList from 'components/DepartmentsList/DepartmentsList';
import Loader from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Container } from 'styles/Element.styled';

const Departments = () => {
  const [city, setCity] = useState('');
  const [departments, setDepartments] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    console.log(searchForm.elements.city.value);
    setCity(searchForm.elements.city.value);
    setPage(1);
    setDepartments([]);
    setIsLoading(true);
    console.log(isLoading);
  };

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (city === '') {
      return console.log('please... ');
    }

    getDepartmentsInfo(city, page).then(data => {
      console.log(data);
      if (!data) {
        setDepartments([]);
        return console.log(
          'There is no departments with this request. Please, try again'
        );
      }
      setDepartments(prevState => [...prevState, ...data.data]);
    });
    setIsLoading(false);
  }, [city, page]);

  useEffect(() => {
    console.log(city);
    console.log(departments);
  }, [city, departments]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <DepartmentsList
        city={city}
        isLoading={isLoading}
        items={departments}
        onClick={onClickLoadMore}
      />
    </Container>
  );
};

export default Departments;
