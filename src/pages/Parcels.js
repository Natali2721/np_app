import { getTrackingInfo } from 'Api/apiServices';
import { TrackBar } from 'components/TrackBar/TrackBar';
import TrackHistory from 'components/TrackingHistory/TrackingHistory';
import TrackInfoBar from 'components/TrackingInfoBar/TrackingInfoBar';
import { useEffect, useState } from 'react';
import { Container, ContainerInfo } from 'styles/Element.styled';

const Parcels = () => {
  const [trackingList, setTrackingList] = useState([]);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState({});

  const input = document.getElementById('TTN');

  useEffect(() => {
    const numbers = JSON.parse(localStorage.getItem('numbers'));
    if (numbers) {
      setTrackingList(numbers);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    console.log(searchForm.elements.TTN.value);
    setTrackingNumber(searchForm.elements.TTN.value);
    localStorage.setItem('numbers', JSON.stringify(trackingList));
    //searchForm.reset();
  };

  const onClick = () => {
    setTrackingList([]);
    setTrackingNumber('');
    input.value = '';
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

      if (!trackingList.includes(trackingNumber)) {
        setTrackingList(prevState => [...prevState, trackingNumber]);
      }
    });
  }, [trackingNumber, trackingList]);

  useEffect(() => {
    localStorage.setItem('numbers', JSON.stringify(trackingList));
  }, [trackingList]);

  useEffect(() => {
    if (trackingList.length < 1) {
      setTrackingInfo({});
    }
  }, [trackingList]);

  const updateNumber = item => {
    setTrackingNumber(item);
    input.value = item;
  };

  return (
    <Container>
      <TrackBar onSubmit={handleSubmit} />
      <ContainerInfo>
        <TrackInfoBar trackingInfo={trackingInfo} />
        <TrackHistory
          items={trackingList}
          onClick={onClick}
          updateNumber={updateNumber}
        />
      </ContainerInfo>
    </Container>
  );
};

export default Parcels;
