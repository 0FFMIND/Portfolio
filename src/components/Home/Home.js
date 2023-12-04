import React from "react";
import { Container } from "react-bootstrap";
import "../../style.css";
import Type from "./Type";
import Toolstack from "./Toolstack";
import content1 from "../../Assets/Home/content-1.png";
import content2 from "../../Assets/Home/content-2.png";
import content3 from "../../Assets/Home/content-3.png";
import content4 from "../../Assets/Home/content-4.png";
import liIcon from "../../Assets/Home/li-icon.png";

import "../../style.css";
function Home() {

    return (
            <Container fluid className="home-section" id="home">
                <Container className="home-content">

                    <h1 className="NormalText" style={{ paddingTop: 20 }}>
                        <span className="ShiningText">Hi, My Intresets lie in</span>
                        <span style={{ display: "inline-block", paddingLeft: 40, fontSize: "14px", textAlign: "left" }}>
                        <Type />
                    </span>
                    </h1>

                    <div className="ListContainer">
                        <div className='itemContainer'>
                            <div className="title">
                                <p className="mainTitle">Centered Creation</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Innovative Technologies</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Game Applications and Products</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Digital Arts</p>
                            </div>
                            <div className="web3ImgContainer">
                                <img src={content1} alt='content-1' />
                            </div>
                        </div>
                        <div className='itemContainer'>
                            <div className='web3ImgContainer2'>
                                <img src={content2} alt='content-2' />
                            </div>
                            <div className="title">
                                <p className="mainTitle">Undergrade's researches</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Network Communications</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />AR & VR in Computer Graphics</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Robotic Control and Autonomous System</p>
                            </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="title">
                                <p className="mainTitle">Technologies Stack</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Node.js</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Modern Javascript Library</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Frameworks like React.js and Next.js</p>
                            </div>
                            <div className='web3ImgContainer'>
                                <img src={content3} alt='content-3' />
                            </div>
                        </div>
                        <div className='itemContainer'>
                            <div className='web3ImgContainer2'>
                                <img src={content4} alt='content-4' />
                            </div>
                            <div className="title">
                                <p className="mainTitle">Classics Language</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />C# (mainly)</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Javascript</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />Python</p>
                                <p className="subTitle"><img src={ liIcon } alt='li-icon' />C</p>
                            </div>
                        </div>
                    </div>
                    <Toolstack />
                </Container>
            </Container>
    );
}


export default Home;
