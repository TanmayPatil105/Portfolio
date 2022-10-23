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
        <nav className="navbar navbar-light bg-success">
          <form className="container-fluid justify-content-start">
            {this.state.matches &&  (<>
              <Link to='/' className="btn btn-lg btn-outline-dark me-2 bg-gradient" type="button">Profile</Link>
              <Link to='/learn' className="btn btn-lg btn-outline-dark me-2 bg-gradient" type="button">Learning</Link>
              <Link to='/project' className="btn btn-lg btn-outline-dark bg-gradient" type="button">Projects</Link>
            </>)}
            {!this.state.matches &&  (<>
              <Link to='/' className="btn btn-sm btn-outline-dark me-2 bg-gradient" type="button">Profile</Link>
              <Link to='/learn' className="btn btn-sm btn-outline-dark me-2 bg-gradient" type="button">Learning</Link>
              <Link to='/project' className="btn btn-sm btn-outline-dark bg-gradient" type="button">Projects</Link>
            </>)}
        
            {this.state.matches && <div className="mx-auto">
              <a href='/'><img src={logo_lg} alt="" /></a>
            </div>}
            {!this.state.matches && <div className="mx-auto" style={{marginLeft:"100px"}}>
             <a href="/"><img src={logo_lg} alt="" style={{width:"90px",height:"30px"}} /></a>
            </div>}
          </form>
        </nav>
      </div>
    )
  }
}

export default NavBar