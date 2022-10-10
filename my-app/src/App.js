import Button from './components/Button'
import { Hero } from './components/Hero'
import ContinuousSlider from './components/Slider'
import BasicList from './components/List'
import CircularIndeterminate from './components/progrss'
import BasicRating from './components/Rate'
import BasicSwitches from './components/Switch'

import './index.css'

function App() {
  return (
    <div className="App dark">
      <div className='container-flow d-flex justify-content-center pt-5'>
            <Hero />
            <div className='row flex-column'>
              <div className='col d-flex justify-content-center flex-column'>
                <Button />
                <BasicSwitches />
                <ContinuousSlider />
                <BasicList />
                <CircularIndeterminate />
                <BasicRating />
              </div>
            </div>
      </div>
      



   


    </div>
  );
}

export default App;
