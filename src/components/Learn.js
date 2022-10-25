import React, {PureComponent } from 'react'
import './Learn.css'

export default class Learn extends PureComponent {

    url = [{"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/c/original/COriginal.svg",
            "alt":"C"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/cplusplus/original/CplusplusOriginal.svg",
            "alt":"C++"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/python/original/PythonOriginal.svg",
            "alt":"python"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/html5/original/Html5Original.svg",
            "alt":"html5"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/css3/original/Css3Original.svg",
            "alt":"css3"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/javascript/original/JavascriptOriginal.svg",
            "alt":"javascript"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/mysql/original/MysqlOriginal.svg",
            "alt":"mysql"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/postgresql/original/PostgresqlOriginal.svg",
            "alt":"postgresql"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/docker/original/DockerOriginal.svg",
            "alt":"docker"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/react/original/ReactOriginal.svg",
            "alt":"react"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/bootstrap/plain/BootstrapPlain.svg",
            "alt":"bootstrap"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/git/original/GitOriginal.svg",
            "alt":"git"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/github/original/GithubOriginal.svg",
            "alt":"github"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/gitlab/original/GitlabOriginal.svg",
            "alt":"gitlab"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/linux/original/LinuxOriginal.svg",
            "alt":"linux}"}}
            ]   

    constructor(props){
        super(props);
        this.state = {
            urls : this.url,
            matches: window.matchMedia("(min-width: 768px)").matches 
        }
        
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }

    render() {

        return (
        <div style={{marginBottom:"30px"}}>
             <div className="d-flex justify-content-center align-items-center">
                <p style={{color:"#5cb85c",fontSize:this.state.matches?"50px":"30px",fontFamily:"'M PLUS Code Latin', sans-serif",marginTop:"50px"}}>
                    Proffesional SkillSet
                </p>
             </div>
             <div className="row">
                {this.state.urls.map((element)=>{ 
                    return  <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <div className=' d-flex align-items-center justify-content-center'style={{width:"100px",height:"100px",marginTop:"20px"}}>
                                    <img src={element.img.url} alt={element.img.alt} title={element.img.alt} style={{width:"80px",height:"80px"}}/>
                                </div>
                            </div>
                })}
             </div>
        </div>
        )
    }
}
