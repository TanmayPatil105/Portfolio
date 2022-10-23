import React, { PureComponent } from 'react'
import Card from './Card'

export default class Project extends PureComponent {

    constructor(props){
        super(props);
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches  }
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }

    render() {
        return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <p style={{color:"#5cb85c",fontSize:this.state.matches?"50px":"30px",fontFamily:"'M PLUS Code Latin', sans-serif",marginTop:"50px"}}>
                    My Projects
                </p>
            </div>
            <div className='row'>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}} >
                    <Card title={"procfetch"} description={"Linux command line utility"} img={"https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png"} link={"https://github.com/TanmayPatil105/procfetch"}/>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"wifi-cli"} description={"Wifi through command line"} img={"https://user-images.githubusercontent.com/92677342/197331922-d6775fe4-f6fd-4d73-85d8-fa830010f6ee.png"} link={"https://github.com/TanmayPatil105/wifi-cli"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"Portfolio"} description={"My Portfolio Website"} img={"https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"} link={"https://github.com/TanmayPatil105/Portfolio"} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"diff"} description={"Git diff command to compare two files line by line"} img={"https://user-images.githubusercontent.com/92677342/197394349-5ca03487-4d5b-4b3a-8578-90034c1a48d3.png"} link={"https://github.com/TanmayPatil105/diff"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"Resume Maker"} description={"Resume building app using JavaScript"} img={"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"} link={"https://github.com/TanmayPatil105/Resume-Maker"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"Authentication System"} description={"QR-CODE based Identity Authentication system"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn6OFTaK4Six4Dwv-GL-4HM8vKn1N4Nfj3w&usqp=CAU"} link={"https://github.com/TanmayPatil105/qrcode-based-authentication-system"} />
                </div>
            </div>
            <br/>
            <br/>
        </div>
        )
    }
}
