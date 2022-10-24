import React,{PureComponent} from 'react';
import './Card.css'

export default class Card extends PureComponent {
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
      <div>
          <div class="card bg-success bg-gradient text-dark" style={{width:this.state.matches?"400px":"250px"}}>
              {this.state.matches && <img class="card-img-top" src={this.props.img} alt="Language"/> }
              {!this.state.matches && <img class="card-img-top" src={this.props.img} alt="Card" style={{width:"auto",height:"auto"}}/>}
              <div class="card-body">
                  <h4 class="card-title">{this.props.title}</h4>
                  <p class="card-text">{this.props.description}</p>
                  <a href={this.props.link} class="btn btn-success">Repository Link</a>
              </div>
          </div>
      </div>
    )
  } 
}
