import { getDepartmentsInfo } from 'Api/apiServices';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Container } from 'styles/Element.styled';

const Departments = () => {
  const [city, setCity] = useState('');
  const [departments, setDepartments] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    console.log(searchForm.elements.city.value);
    setCity(searchForm.elements.city.value);
    searchForm.reset();
  };

  useEffect(() => {
    if (city === '') {
      return console.log('please... ');
    }

    getDepartmentsInfo(city).then(data => {
      console.log(data);
      if (!data) {
        setDepartments([]);
        return console.log(
          'There is no departments with this request. Please, try again'
        );
      }
      setDepartments(data);
    });
  }, [city]);

  useEffect(() => {
    console.log(city);
    console.log(departments);
  }, [city, departments]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
    </Container>
  );
};

export default Departments;
