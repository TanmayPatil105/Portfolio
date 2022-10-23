import React, { PureComponent } from 'react'
import Type from '../components/Type';
import Name from '../components/Name';
import code_lg from '../assets/code-lg.png';

class Body extends PureComponent {
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
        <div className='row'>
            <div className='col-md-6'>
                <div className="h-100 text-success d-flex align-items-center justify-content-center">
                    <Name size1={this.state.matches?"50px":"30px"} size2={this.state.matches?"30px":"20px"}/>
                </div>
                <div className='d-flex align-items-center justify-content-center' style={{marginTop:this.state.matches?"-150px":"0px"}}>
                    <Type size={this.state.matches?"50px":"30px"}/>
                </div>
            </div>
            {this.state.matches && <div className='col-md-5 d-flex align-items-center justify-content-center' style={{paddingTop:"150px"}}>
                <img src={code_lg} alt="" />
            </div>}
            {!this.state.matches && <div className='col-md-5 d-flex align-items-center justify-content-center' style={{paddingTop:"100px"}}>
                <img src={code_lg} alt="" style={{width:"1000px",height:"200px"}} />
            </div>}
        </div>
        )
    }
}

export default Body