import { Button, Galery, GaleryItem, HomeTitle } from 'styles/Element.styled';
import PropTypes from 'prop-types';

const DepartmentsList = ({ items, onClick }) => {
  console.log(items);
  // console.log(items.length);

  return (
    <div>
      {items.length === 0 && (
        <HomeTitle>Оберіть, будь ласка, населений пункт</HomeTitle>
      )}
      {items.length > 0 && (
        <Galery>
          {items.map(item => {
            return <GaleryItem>{item.Description}</GaleryItem>;
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
};
