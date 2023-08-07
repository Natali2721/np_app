import { ContentBox, Text, TextInfo } from 'styles/Element.styled';
import PropTypes from 'prop-types';

const TrackInfoBar = ({ trackingInfo }) => {
  const { WarehouseRecipient, WarehouseSender, Status } = trackingInfo;

  return (
    <ContentBox>
      <Text>
        Статус доставки : <TextInfo>{Status || ''}</TextInfo>
      </Text>
      <Text>
        Відправлено : <TextInfo>{WarehouseSender || ''}</TextInfo>
      </Text>
      <Text>
        Отримано : <TextInfo>{WarehouseRecipient || ''}</TextInfo>
      </Text>
    </ContentBox>
  );
};

export default TrackInfoBar;

TrackInfoBar.propTypes = {
  trackingInfo: PropTypes.object,
};
