import './App.css';
import NavBar from '../src/components/NavBar';
import Type from './components/Type';
import Name from './components/Name'
import code from './assets/code.png'


function App() {
  
  return (
    <div className='row'>
      <NavBar/>
      <div className='col-md-6'>
        <div className="h-100 text-success d-flex align-items-center justify-content-center">
          <Name/>
        </div>
        <div className='d-flex align-items-center justify-content-center' style={{marginTop:"-150px"}}>
          <Type/>
        </div>
      </div>
      <div className='col-md-5 d-flex align-items-center justify-content-center' style={{paddingTop:"150px"}}>
          <img src={code} alt="" />
        </div>
    </div>
  );
}

export default App;
