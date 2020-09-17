
import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import styled from 'styled-components'

const theme = {
    frontEnd : {
        primaryColor : "#B9E6E9",
        secondaryColor : "#31CBED"
    },
    webDesign : {
        primaryColor : "#E8BEC6",
        shadow : "#DB6CBE"
    },
    infrastructure : {
        primaryColor : "#A8E9A1",
        shadow : "#93EB98"
    },
    gameDesign : {
        primaryColor : "#FFED8C",
        shadow : "#FFEE7C"
    },
    gameDev : {
        primaryColor : "#FFAC3A",
        shadow : "#FFA700"
    }
    
}

const Button = styled.div`
    color : ${props => props.color};
    cursor : pointer;
    font-size : ${props => props.fontSize};
    border : 2px solid ${props => props.color};
    padding : 10px;
    text-align : center;
    margin : 20px 0 0 0;
    font-family : "Itim-Regular";
    border-radius : 9px;
    margin : 20px auto;
    width : ${props => props.width};
    :hover {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
   
`
const Container = styled.div`
    background-color :  #023058;  
    height : 100vh;
    color : white;
    font-family : "Rye-Regular";
`
const SubjectItemContainer = styled.div`
    display : flex;
    width : 100%;
    align-items : flex-start;
`
const SubjectItem = styled.div`
    margin : 10px 10px;
    display : flex;
    flex-direction : column;
    justify-items : center;
    :hover div {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
`
const SubjectLogo = styled.div`
    background-image : url(${props => props.src});
    background-repeat : no-repeat;
    background-size : cover; 
    background-position : center;
    width : 91px;
    height : 91px;
    margin : 0 auto;
    border-radius : 50%;
    cursor : pointer;
`
const OtherSubject = styled.h4`
    font-size: 32px;
    font-family : "Itim-Regular";
`
const Header = styled.h1`
    font-size : 120px;
    color : white;
` 
const SubHeader = styled.h2`
    font-size : 60px;
    color : white;
    transition : .5s ease;
`
const Wrapper = styled.div`
    max-width : 90vw;
    margin : 0 auto;
    display : flex;
`
const Content = styled.div`
    font-size : 20px;
    font-family : "Itim-Regular";
    text-indent : 50px;
`
const Column = styled.div`
    display : flex;
    flex-direction : column;
    width : 50%;
`

function Subject(props){
    return (
        <SubjectItem color={props.color} shadow={props.shadow} className="active" onClick={props.onClick}>
            <SubjectLogo  src={props.src} />
            <Button  color={props.color} fontSize={"12px"} > {props.name} </Button>
        </SubjectItem>
    )
}
function TotalSubject(props){
    return (
    <SubjectItemContainer>
        <Subject src={fe_logo}  name="Front-End" color={theme.frontEnd.primaryColor} shadow={theme.frontEnd.secondaryColor} onClick={() => props.onClick(0)} />
        <Subject src={web_design_logo}  name="Web Design" color={theme.webDesign.primaryColor} shadow={theme.webDesign.shadow} onClick={() => props.onClick(1)} />
        <Subject src={infra_logo} name="Infrastructure" color={theme.infrastructure.primaryColor} shadow={theme.infrastructure.shadow} onClick={() => props.onClick(2)}  />
        <Subject src={game_design_logo}  name="Game Design" color={theme.gameDesign.primaryColor} shadow={theme.gameDesign.shadow} onClick={() => props.onClick(3)}  />
        <Subject src={game_dev_logo}  name="Game Development" color={theme.gameDev.primaryColor} shadow={theme.gameDev.shadow} onClick={() => props.onClick(4)}  />
    </SubjectItemContainer>
    )
}
export default class Team extends Component {
    state = {
        subject_header : [
            "Front-End",
            "Web design",
            "Infrastructure",
            "Game Design",
            "Game Developer"
        ],
        subject_description : [
            `ในสาขานี้จะพาไปเปิดโลกของการเป็นนักพัฒนาเว็บไซต์ ซึ่งจะได้เรียนรู้ตั้งเเต่ HTML & CSS, Javascript เเละการใช้ git จนถึงการเขียน React ซึ่งเป็นสิ่งที่มีความต้องการสูง ในสายงาน IT ในปัจจุบัน`,
            `2`
        ] 
    }

    changeTopic(index){
        const pElement = document.getElementsByClassName('content');
        const h2Element = document.getElementsByTagName('h2');

        h2Element[0].innerText = this.state.subject_header[index];
        pElement[0].innerText = this.state.subject_description[index];
    }

    setColor(primary,shadow,index){
        primary = theme.frontEnd.primaryColor;
    }

    activeButton(index){
        const activeElement = document.getElementsByClassName("active");
        const activeChildNode1 = activeElement[index].childNodes[0];
        const activeChildNode2 = activeElement[index].childNodes[1];

        let primary;
        let shadow;
        this.setColor(primary);
        activeChildNode1.style.color = 'black';
        activeChildNode2.style.color = 'black';
        console.log(primary);
        // activeChildNode2.style.backgroundColor = ; 
        // color : black;
        // background-color : ${props => props.color};
        // transition : .4s ease;
        // box-shadow :  0px 0px 15px 1px ${props => props.shadow};
        // const 
    }

    handleClick = (index)=> {
        this.changeTopic(index);
        this.activeButton(index); 
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Wrapper>
                    <Column>
                        <Header>Teams</Header>
                        <section className="subject-zone">
                            <SubHeader>{this.state.subject_header[0]}</SubHeader>
                            <Content><p className="content">{this.state.subject_description[0]}</p></Content>
                            <Button 
                                color="#B9E6E9" 
                                shadow="#31CBED"
                                width="200px" 
                                fontSize="18px" > Register </Button>
                        </section>
                        <section className="other-subject-zone">
                            <OtherSubject>สาขาอื่นๆ</OtherSubject>
                            <TotalSubject onClick={(i) => this.handleClick(i)} />
                        </section>
                    </Column> 
                    <Column>
                        <img src={dolphin} style={{width:"100%",marginTop:"50px"}} alt="Dolphin"/>
                    </Column>
                    </Wrapper>
                </Container>
            </Fragment>
        )
    }
}
