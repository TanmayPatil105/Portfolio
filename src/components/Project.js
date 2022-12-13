import React, { PureComponent } from 'react';
import Card from './Card';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item)));
    return images;
}

const images = importAll(require.context('../assets/languages/', false, /\.(png|jpe?g|svg)$/));

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
            {this.state.matches && <>
            <div className="d-flex justify-content-center align-items-center">
                <p style={{color:"#5cb85c",fontSize:this.state.matches?"50px":"30px",fontFamily:"'M PLUS Code Latin', sans-serif",marginTop:"50px"}}>
                    My Projects
                </p>
            </div>
            <div className='row'>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}} >
                    <Card title={"procfetch"} description={"Linux command line utility"} img={images['c++.png']} link={"https://github.com/TanmayPatil105/procfetch"}/>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"wifi-cli"} description={"Wifi through command line"} img={images['bash.png']} link={"https://github.com/TanmayPatil105/wifi-cli"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"Portfolio"} description={"My Portfolio Website"} img={images['react.png']} link={"https://github.com/TanmayPatil105/Portfolio"} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"diff"} description={"Git diff command to compare two files line by line"} img={images['c.png']} link={"https://github.com/TanmayPatil105/diff"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"Event Management System"} description={"A comprehensive event management system built with Flask Framework and MySQL"} img={images['mysql.png']} link={"https://github.com/TanmayPatil105/event-management-system"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                    <Card title={"Authentication System"} description={"QR-CODE based Identity Authentication system"} img={images['python.png']} link={"https://github.com/TanmayPatil105/qrcode-based-authentication-system"} />
                </div>
            </div>
            <br/>
            <br/>
            </>}
            {!this.state.matches && <>
            <div className="d-flex justify-content-center align-items-center">
                <p style={{color:"#5cb85c",fontSize:this.state.matches?"50px":"30px",fontFamily:"'M PLUS Code Latin', sans-serif",marginTop:"50px"}}>
                    My Projects
                </p>
            </div>
            <div className='row'>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}} >
                    <Card title={"profetch"} description={"Linux command line utility"} img={images['c++.png']} link={"https://github.com/TanmayPatil105/procfetch"}/>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"wifi-cli"} description={"Wifi through command line"} img={images['bash.png']} link={"https://github.com/TanmayPatil105/wifi-cli"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"Portfolio"} description={"My Portfolio Website"} img={images['react.png']} link={"https://github.com/TanmayPatil105/Portfolio"} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"diff"} description={"Git diff command to compare two files line by line"} img={images['c.png']} link={"https://github.com/TanmayPatil105/diff"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"Event Management System"} description={"A comprehensive event management system built with Flask Framework(Python) and MySQL"} img={images['mysql.png']} link={"A comprehensive event management system built with Flask Framework(Python) and MySQL,"} />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"30px"}}>
                    <Card title={"Authentication System"} description={"QR-CODE based Identity Authentication system"} img={images['python.png']} link={"https://github.com/TanmayPatil105/qrcode-based-authentication-system"} />
                </div>
            </div>
            <br/>
            <br/>
            </>}
        </div>
        )
    }
}
