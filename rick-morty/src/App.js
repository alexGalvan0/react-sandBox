import Nav from './componenets/Nav';
import ActionAreaCard from './componenets/ActionAreaCard'
import Button from '@mui/material/Button'



function App() {
  return (
    <div className="App container-fluid">
      <Nav />

      <Button variant='contained' color='secondary'>CLICK ME</Button>
      <div className='row'>
        <div className='col pt-5 d-flex justify-content-center'>

          <ActionAreaCard  />
        </div>
      </div>
    </div>
  );
}

export default App;
