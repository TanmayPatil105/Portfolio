import React,{Component} from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'


class Footer extends Component{
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }
  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }

  render(){
    return (
      <div className='footer row'>
          <div className="col-md-12 d-flex align-items-center justify-content-center">
              <SocialIcon url="https://github.com/TanmayPatil105"  bgColor='#5cb85c' fgColor='#282c34' className={this.state.matches?'mx-5':'mx-2'}/>
              <SocialIcon url="https://discord.com/users/Txnmxy/6057" bgColor='#5cb85c' fgColor='#282c34' className={this.state.matches?'mx-5':'mx-2'}/>
              <SocialIcon url="https://twitter.com/TanmayFCB" bgColor='#5cb85c' fgColor='#282c34' className={this.state.matches?'mx-5':'mx-2'}/>
          </div>
      </div>
    )
  }
}

export default Footer