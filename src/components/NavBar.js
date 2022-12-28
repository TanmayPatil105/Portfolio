import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import props from 'prop-types';
import logo_lg from '../assets/logo-lg.png'
import './NavBar.css'


class NavBar extends Component{

  constructor() {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-light bg-success row">
          <form className="container-fluid justify-content-start">
            {this.state.matches &&  (<div className='col-md-4 mx-3'>
              <Link to='/' className="btn btn-lg btn-outline-dark me-3 bg-gradient rounded-pill" type="button">Profile</Link>
              <Link to='/learn' className="btn btn-lg btn-outline-dark me-3 bg-gradient rounded-pill" type="button">Learning</Link>
              <Link to='/project' className="btn btn-lg btn-outline-dark me-3 bg-gradient rounded-pill" type="button">Projects</Link>
              <Link reloadDocument to='/random' className="btn btn-lg btn-outline-dark me-3 bg-gradient rounded-pill" type="button">About me</Link>
            </div>)}
            {!this.state.matches &&  (<div className='mx-1'>
              <Link to='/' className="btn btn-sm btn-outline-dark me-2 bg-gradient rounded-pill" type="button">Profile</Link>
              <Link to='/learn' className="btn btn-sm btn-outline-dark me-2 bg-gradient rounded-pill" type="button">Learning</Link>
              <Link to='/project' className="btn btn-sm btn-outline-dark me-2 bg-gradient rounded-pill" type="button">Projects</Link>
              <Link to='/random' className="btn btn-sm btn-outline-dark bg-gradient rounded-pill" type="button">About me</Link>
            </div>)}
        
            {this.state.matches && <div className="col-md-4 zoom d-flex align-items-center justify-content-center">
              <Link reloadDocument to='/random'><img src={logo_lg} alt="" /></Link> 
            </div>}
            {!this.state.matches && <div className="mx-auto" style={{marginLeft:"100px"}}>
             <Link reloadDocument to="/random"><img src={logo_lg} alt="" style={{width:"90px",height:"30px"}} /></Link>
            </div>}
          </form>
        </nav>
      </div>
    )
  }
}

export default NavBar 