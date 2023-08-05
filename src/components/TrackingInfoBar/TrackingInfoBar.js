import { ContentBox, Text, TextInfo } from 'styles/Element.styled';

const TrackInfoBar = ({ trackingInfo }) => {
  console.log(trackingInfo);

  const { WarehouseRecipient, WarehouseSender, Status } = trackingInfo;

  console.log(trackingInfo.Status);

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
