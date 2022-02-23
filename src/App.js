import Container from '@material-ui/core/Container';

import PlaceList from './components/PlaceList/PlaceList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <PlaceList />
      </Container>
    </div>
  );
}

export default App;
