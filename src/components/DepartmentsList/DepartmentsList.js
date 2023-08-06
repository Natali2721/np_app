import { Button, Galery, GaleryItem, Title } from 'styles/Element.styled';
import PropTypes from 'prop-types';

const DepartmentsList = ({ items, onClick, city }) => {
  console.log(items);

  return (
    <div>
      {items.length === 0 && city === '' && (
        <Title>Оберіть, будь ласка, населений пункт</Title>
      )}
      {items.length > 0 && (
        <Galery>
          {items.map(item => {
            return (
              <GaleryItem key={item.SiteKey}>{item.Description}</GaleryItem>
            );
          })}
        </Galery>
      )}
      {items.length > 0 && <Button onClick={onClick}>LoadMore</Button>}
    </div>
  );
};

export default DepartmentsList;

DepartmentsList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  city: PropTypes.string,
};
