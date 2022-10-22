import React, {PureComponent } from 'react'

export default class Learn extends PureComponent {

    url = ["https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/c/original/COriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/cplusplus/original/CplusplusOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/python/original/PythonOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/html5/original/Html5Original.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/css3/original/Css3Original.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/javascript/original/JavascriptOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/mysql/original/MysqlOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/postgresql/original/PostgresqlOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/react/original/ReactOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/bootstrap/plain/BootstrapPlain.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/git/original/GitOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/github/original/GithubOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/gitlab/original/GitlabOriginal.svg",
            "https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/linux/original/LinuxOriginal.svg"
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
                                <div className='border border-success d-flex align-items-center justify-content-center'style={{width:"100px",height:"100px",marginTop:"20px"}}>
                                    <img src={element} alt="" style={{width:this.state.matches?"80px":"30px",height:this.state.matches?"80px":"30px"}}/>
                                </div>
                            </div>
                })}
             </div>
        </div>
        )
    }
}
