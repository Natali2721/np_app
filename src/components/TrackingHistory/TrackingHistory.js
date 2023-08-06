import {
  ContentBox,
  Text,
  ButtonDelete,
  List,
  ListItem,
} from 'styles/Element.styled';
import { AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

const TrackHistory = ({ items, onClick, updateNumber }) => {
  console.log(items);
  console.log(items.length);

  // const reversed = items.reverse();

  return (
    <ContentBox>
      <Text>Історія пошуку...</Text>
      <ButtonDelete type="button" onClick={onClick} aria-label="search button">
        <AiFillDelete />
      </ButtonDelete>
      {items.length > 0 && (
        <List>
          {items.map(item => {
            return (
              <ListItem key={item} onClick={() => updateNumber(item)}>
                {item}
              </ListItem>
            );
          })}
        </List>
      )}
    </ContentBox>
  );
};

export default TrackHistory;

TrackHistory.propTypes = {
  onClick: PropTypes.func.isRequired,
  updateNumber: PropTypes.func.isRequired,
  items: PropTypes.array,
};
