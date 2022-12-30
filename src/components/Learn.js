import React, {PureComponent } from 'react'

export default class Learn extends PureComponent {

    url = [{"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/c/original/COriginal.svg",
            "alt":"C","used":"https://github.com/TanmayPatil105/diff"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/cplusplus/original/CplusplusOriginal.svg",
            "alt":"C++","used":"https://github.com/TanmayPatil105/procfetch"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/python/original/PythonOriginal.svg",
            "alt":"python","used":"https://github.com/TanmayPatil105/qrcode-based-authentication-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/html5/original/Html5Original.svg",
            "alt":"html5","used":"https://github.com/TanmayPatil105/event-management-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/css3/original/Css3Original.svg",
            "alt":"css3","used":"https://github.com/TanmayPatil105/event-management-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/javascript/original/JavascriptOriginal.svg",
            "alt":"javascript","used":"https://github.com/TanmayPatil105/Resume-Maker"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/mysql/original/MysqlOriginal.svg",
            "alt":"mysql","used":"https://github.com/TanmayPatil105/event-management-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/postgresql/original/PostgresqlOriginal.svg",
            "alt":"postgresql","used":"https://github.com/TanmayPatil105/event-management-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/docker/original/DockerOriginal.svg",
            "alt":"docker","used":"https://github.com/TanmayPatil105/docker-templates/"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/react/original/ReactOriginal.svg",
            "alt":"react","used":"https://github.com/TanmayPatil105/Portfolio"}},
            {"img":{"url":"https://user-images.githubusercontent.com/92677342/199328490-0ee522a9-c3f5-43ef-b7cd-4dbedaa95007.png",
            "alt":"github-actions","used":"https://github.com/TanmayPatil105/procfetch"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/go/original/GoOriginal.svg",
            "alt":"go","used":"https://github.com/TanmayPatil105/reduce"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/bootstrap/plain/BootstrapPlain.svg",
            "alt":"bootstrap","used":"https://github.com/TanmayPatil105/Portfolio"}},
            {"img":{"url":"https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original-wordmark.svg",
            "alt":"flask","used":"https://github.com/TanmayPatil105/event-management-system"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/git/original/GitOriginal.svg",
            "alt":"git","used":"https://github.com/TanmayPatil105"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/github/original/GithubOriginal.svg",
            "alt":"github","used":"https://github.com/TanmayPatil105"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/gitlab/original/GitlabOriginal.svg",
            "alt":"gitlab","used":"https://gitlab.com/Txnmxy"}},
            {"img":{"url":"https://raw.githubusercontent.com/fpoumian/react-devicon/master/src/components/linux/original/LinuxOriginal.svg",
            "alt":"linux}","used":"https://github.com/TanmayPatil105/wifi-cli"}}
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
        document.title = "Tanmay | Learning"
    }

    render() {

        return (
        <div style={{marginBottom:"30px"}}>
             <div className="d-flex justify-content-center align-items-center">
                <p style={{color:"#5cb85c",fontSize:this.state.matches?"50px":"30px",fontFamily:"'M PLUS Code Latin', sans-serif",marginTop:"50px"}}>
                    Professional SkillSet
                </p>
             </div>
             <div className="row">
                {this.state.urls.map((element)=>{ 
                    return  <div className="col-md-3 d-flex align-items-center justify-content-center row">
                                <div className='d-flex align-items-center justify-content-center zoom'style={{width:"100px",height:"100px",marginTop:"20px"}}>
                                    <a href={element.img.used}><img src={element.img.url} alt={element.img.alt} title={element.img.alt} style={{width:"80px",height:"80px"}} loading="lazy" className='logo'/></a>
                                </div>
                            </div>
                })}
             </div>
        </div>
        )
    }
}
