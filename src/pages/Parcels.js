import { getTrackingInfo } from 'Api/apiServices';
import { SearchBar } from 'components/SearchBar/SearchBar';
import TrackHistory from 'components/TrackingHistory/TrackingHistory';
import TrackInfoBar from 'components/TrackingInfoBar/TrackingInfoBar';
import { useEffect, useState } from 'react';
import { Container, ContainerInfo } from 'styles/Element.styled';

const Parcels = () => {
  const [trackingList, setTrackingList] = useState([]);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    console.log(searchForm.elements.TTN.value);
    setTrackingNumber(searchForm.elements.TTN.value);
    searchForm.reset();
  };

  const onClick = () => {
    setTrackingList([]);
    setTrackingNumber('');
  };

  useEffect(() => {
    if (trackingNumber === '') {
      return console.log('There is no TTN number');
    }
    console.log(trackingNumber);

    getTrackingInfo(trackingNumber).then(data => {
      console.log(data);
      if (!data) {
        setTrackingInfo({});
        return console.log(
          'There is no TTN with this request. Please, try again'
        );
      }
      setTrackingInfo(data);
      //setTrackingList(prevState => [...prevState, data]);
      if (!trackingList.includes(trackingNumber)) {
        setTrackingList(prevState => [...prevState, trackingNumber]);
      }
    });
  }, [trackingNumber]);

  useEffect(() => {
    if (trackingList.length < 1) {
      setTrackingInfo({});
    }
  }, [trackingList]);

  // useEffect(() => {
  //   console.log(trackingInfo);
  //   console.log(trackingList);
  //   console.log(trackingList.length);
  // }, [trackingInfo]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      <ContainerInfo>
        <TrackInfoBar trackingInfo={trackingInfo} />
        <TrackHistory items={trackingList} onClick={onClick} />
      </ContainerInfo>
    </Container>
  );
};

export default Parcels;
