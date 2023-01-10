import React, { PureComponent} from 'react'
import $ from 'jquery';
import './Random.css';
import Spotify from './Spotify';

$(document).ready(function(){
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');
  animateDiv('.e');
  animateDiv('.f');
  animateDiv('.g');
  animateDiv('.h');
  animateDiv('.i');
  animateDiv('.j');
  animateDiv('.k');
  animateDiv('.l');
  animateDiv('.m');
  animateDiv('.n');
});

function makeNewPosition(){
  
  var h = $(window).height() - 100;
  var w = $(window).width() - 100;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
    animateDiv(myclass);        
  });
  
};


export default class Random extends PureComponent {
  
  constructor() {
    super()
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches }; 
  };

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    document.title = "Tanmay | Me"
  }

  render() {
    return (
        <div className="text-success" style={{fontSize:this.state.matches?"50px":"20px",fontFamily:"'Chakra Petch', sans-serif",backgroundColor: 'blue'}}>
          <div class='random a text-light' style={{fontSize:this.state.matches?"45x":"20px"}}><b>Good luck reading things here!</b></div>
          <div class='random b'><b>loves to play and watch football</b></div>
          <div class='random c' style={{fontSize:this.state.matches?"35px":"15px"}}><b>autistic kid</b></div>
          <div class='random e' style={{fontSize:this.state.matches?"40px":"15px"}}><b>wannabe gopher</b></div>
          <div class='random f' style={{fontFamily:"'M PLUS Code Latin', sans-serif"}} ><b style={{fontFamily:"'Chakra Petch', sans-serif"}}>Thank you Messi for rocking my world</b><b> :)</b></div>
          <div class='random g' style={{fontSize:this.state.matches?"50px":"25px"}}><b>likes playing online FPS games</b></div>
          <div class='random h' style={{fontSize:this.state.matches?"60px":"40px"}}><b>obsessed with my <a className='h' href="https://github.com/TanmayPatil105">github</a></b></div>
          <div class='random i' style={{fontSize:this.state.matches?"50px":"30px"}}>linux is better than windows (reminder)</div>
          <div class='random j'><b>Addicted to <a className='j' href="https://twitter.com/TanmayFCB">twitter</a></b></div>
          <div class='random k' style={{fontFamily:"'M PLUS Code Latin', sans-serif"}}><b>massively misunderstood :/</b></div>
          <div class='random l text-warning'>
            <Spotify/>
          </div>
          <div class='random m text-light' style={{fontSize:this.state.matches?"40x":"30px"}}><b>⬅️<a href="/" page>main page</a></b></div>
        </div>
    )
  }
}
