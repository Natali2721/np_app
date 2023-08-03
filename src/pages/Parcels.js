import { SearchBar } from 'components/SearchBar/SearchBar';
import TrackHistory from 'components/TrackingHistory/TrackingHistory';
import TrackInfoBar from 'components/TrackingInfoBar/TrackingInfoBar';
import { Container, ContainerInfo } from 'styles/Element.styled';

const Parcels = () => {
  const handleSubmit = e => {
    e.preventDefault();
    //const searchForm = e.currentTarget;
    //setSearchParams({ movieName: searchForm.elements.movieName.value });
    //searchForm.reset();
  };
  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      <ContainerInfo>
        <TrackInfoBar />
        <TrackHistory />
      </ContainerInfo>
    </Container>
  );
};

export default Parcels;
