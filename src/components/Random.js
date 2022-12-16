import React, { PureComponent } from 'react'
import $ from 'jquery';
import './Random.css'


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
});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
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
  }

  componentDidMount() {
  const handler = e => this.setState({matches: e.matches});
  window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }

  render() {
    return (
        <div className="text-success" style={{fontSize:this.state.matches?"50px":"20px",fontFamily:"'M PLUS Code Latin', sans-serif",backgroundColor: 'blue'}}>
          <div class='a text-light'>Good luck reading things here!</div>
          <div class='b text-warning'>Loves to Play and Watch Football</div>
          <div class='c text-success'>Autistic Kid</div>
          <div class='d text-danger'>Weirdo</div>
          <div class='e text-success'>wannabe BANE</div>
          <div class='f text-primary'>{"Thank you Messi for rocking my world ;)"}</div>
          <div class='g text-primary'>likes playing online FPS games</div>
          <div class='h text-info'>obsessed with my <a href="https://github.com/TanmayPatil105">github</a></div>
          <div class='i text-info'>linux is better than windows(reminder)</div>
          <div class='j text-secondary'>Addicted to <a href="https://twitter.com/TanmayFCB">twitter</a></div>
        </div>
    )
  }
}

