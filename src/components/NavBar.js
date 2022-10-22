import React,{Component} from 'react'
import props from 'prop-types';
import logo_lg from '../assets/logo-lg.png'
import logo_sm from '../assets/logo-sm.png'
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
            {this.state.matches &&  (<><button className="btn btn-lg btn-outline-dark me-2 bg-gradient" type="button">Learning</button>
            <button className="btn btn-lg btn-outline-dark bg-gradient" type="button">GitHub</button></>)}
            {!this.state.matches &&  (<><button className="btn btn-sm btn-outline-dark me-2 bg-gradient" type="button">Learning</button>
            <button className="btn btn-sm btn-outline-dark bg-gradient" type="button">GitHub</button></>)}
        
            {this.state.matches && <div className="mx-auto">
              <img src={logo_sm} alt="" />
            </div>}
            {!this.state.matches && <div className="mx-auto">
              <img src={logo_lg} alt="" />
            </div>}
          </form>
        </nav>
      </div>
    )
  }
}

export default NavBar
