import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import ImageCell from "../ImageSlice/ImageCell";
import ARSender from "../../Assets/Projects/ARSender.png";
import Interstellar from "../../Assets/Projects/Interstellar.png";
import DigitalTwins from "../../Assets/Projects/DigitalTwins.png";
import ImageControl from "../../Assets/Projects/ImageControl.png";
import TowerMiner from "../../Assets/Projects/TowerMiner.png";
import Website from "../../Assets/Projects/Website.png";
import HuaiShi from "../../Assets/Projects/GJ1.png";
import Dancing from "../../Assets/Projects/GJ2.png";
import PinCou from "../../Assets/Projects/GJ3.png";
import GJ4 from "../../Assets/Projects/GJ4.png";
import GJ5 from "../../Assets/Projects/GJ5.png";
import GJ6 from "../../Assets/Projects/GJ6.png";

function Projects() {

    const SliceInner = ({index, title, context, isBlog, link = undefined, ghLink = undefined, demoLink = undefined}) => {
        return <div className="innerContentWrapper">
        <div className="contentIndex">
          {index}
        </div>
        <div className="contentTitle">
          {title}
        </div>
        <div className="contentText" >
          {context}
        </div>
        <div style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px"}}>
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
          >
            {isBlog ? "Github" : "Demo Video"}
          </Button>
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
            >
              <BsGithub /> &nbsp;
              {"Github"}
            </Button>
          )}
          {!isBlog && link &&(
              <Button
                  variant="primary"
                  href={link}
                  target="_blank"
              >
                  {"Game"}
              </Button>
          )}
          </div>
      </div>
    }

  return (
    <div className="project-section">
        <div className="PortalTopContainer" >
          <div className="PortalTopTitle">Previous Work </div>
        </div>
        <Container>
            <div className="PortalSubTitle">Research Projects & Games</div>
            <div className="imgContainer">
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"01"}
                cardText={"Interstellar Cleanse Project - Game"}
                imageUrl={Interstellar}
                coverContent={
                  <SliceInner
                    index={"01"}
                    isBlog={false}
                    title={"Interstellar Cleanse Project - Game"}
                        context={"This game was launched in October 2023, with a Sci-Fi theme and a dedication to the G4G (Games for Good) principle. Players must lead a space cleaning fleet to the Kepler-62 star system, where they will clear space debris, collect clean energy, construct purifiers, and restore interstellar ecosystems."}
                    demoLink="https://github.com/0FFMIND/Second-Game-Jam"
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/Ee2pbPdTqbVGmZz6saYF_OQBGvMYKsHRf6jtk1JqaB68Fw?e=8OJX4S"
                    link="https://www.gcores.com/games/112132"
                  />
              }/>
              <ImageCell
                isReversed={true}
                cardTitle={"02"}
                cardText={"Summer School's VR-based and Digital Twins Project"}
                imageUrl={DigitalTwins}
                coverContent={
                  <SliceInner
                    index={"02"}
                    isBlog={false}
                    title={"Summer School's VR-based and Digital Twins Project"}
                        context={"This VR-based project, applying Quest2 VR headsets, was launched in August 2023. Its purpose was to bring the Metaverse concept to a ROS-based robotic arm and create a digital twin to assist other testers in troubleshooting through TCP communication. A comprehensive report and PowerPoint presentation can be found on Github."}
                    demoLink="https://github.com/0FFMIND/SummerController"
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EUClllN7GWVMucczObfO12IBp0eb-WoDlsWZKf7mXszepg?e=tQzG0G"
                  />
              }/>
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"03"}
                cardText={"AR-based QR Code Recognization and Remote Sender"}
                imageUrl={ARSender} 
                coverContent={
                  <SliceInner
                    index={"03"}
                    isBlog={false}
                    title={"AR-based QR Code Recognization and Remote Sender"}
                        context={"This AR-based project, applying Hololens2 AR headsets, was completed in January 2023. It employed the UDP protocol to facilitate communication between remote devices. The project also used Microsoft's extension package for QR code scanning and their image recognition system for easy management."}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EThvP89FGjlBrd13_zF9XcoBuDL2T2dlwEi47PzxN2ZzdQ?e=iAsIre"
                  />
                }
              />
              <ImageCell
                isReversed={true}
                cardTitle={"04"}
                cardText={"AR-based Image Recognization and Hand Control"}
                imageUrl={ImageControl}
                coverContent={
                  <SliceInner
                    index={"04"}
                    isBlog={false}
                    title={"AR-based Image Recognization and Hand Control"}
                    context={"This AR-based project applying Hololens2 as AR headsets was implemented in September 2022. It used offline image recognition with the external plugin Vuforia. For the control aspect, it used Microsoft's basic interface and applied line constraints for the main control functions."}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXtBBhSbFT9NjaYEyaCqQLcB8hG7U81LdbNiopCsd4984A?e=AVX6nD"
                  />
              }/>
              <ImageCell
                isReversed={true}
                isDark={true}
                cardTitle={"05"}
                cardText={"TowerMiner - CloudRendering Game"}
                imageUrl={TowerMiner}
                coverContent={
                  <SliceInner
                    index={"05"}
                    isBlog={false}
                    title={"TowerMiner - CloudRendering Game"}
                    context={"This game was uploaded to the Unity official online cloud renderer in October 2022, which executed the whole programme on a cloud server. It could detected whether the user's platform was moblie and PC, and responsed differently."}
                    ghLink="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EXCsR8DZCINGnZL1er34lsAB30Ky4IkL7XtloisbQJZ1NQ?e=Ki9TGm"
                    demoLink="https://github.com/0FFMIND/First-Game-Jam"
                    link="https://cloudrendering.unity.cn/app/6352422c9818530021467c1d/preview"
                  />
              }/>
              <ImageCell
                isReversed={true}
                cardTitle={"06"}
                cardText={"Website - Formatting with bootstrap5"}
                imageUrl={Website}
                coverContent={
                  <SliceInner
                    index={"06"}
                    isBlog={true}
                    title={"Website - Formatting with bootstrap5"}
                    context={"This website was constructed in July 2022 and it can be accessed either on PC or moblie. Since the static webpages is written by languages including HTML, css and JavaScript, I uploaded the entire pages to a cloud server to make it dynamic."}
                    ghLink="https://github.com/0FFMIND/Web-Code"
                  />
              }/>
              </div>
              <div className="PortalSubTitle" style={{ paddingTop: "30px" }}>Game Exhibition NOC Studio Attended</div>
              <div style={{ paddingBottom:"25px" }}>NOC(No Otter Crossing) Studio is my self-founded game studio where I am the core programmer and president of whole studio's affair. It now contains about 25 people and participates several game jam both domestically and overseas.</div>
          </Container>
          <Container>
              <h4 style={{ letterSpacing: "2px", textAlign: "justify" }}><strong><i>1. G-FUSION GAME FEST</i></strong></h4>
          <div className="NormalText">One of the biggest game events for awarded game in <span className="ShiningText">BOOOM and G4G concept</span>, three of us showed our game with explanation 'Interstellar Cleanse Project' in November, 2023 at Chengdu.</div>
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
              <Col md={4} className="video-outline">
                      <img
                          src={HuaiShi}
                      alt="card-img"
                      style={{ width: "100%" }}
                  />
              </Col>
              <Col md={4} className="video-outline">
                  <img
                      src={Dancing}
                      alt="card-img"
                      style={{ width: "100%" }}
                      />
                  </Col>
              <Col md={4} className="video-outline">
                  <img
                      src={PinCou}
                      alt="card-img"
                      style={{ width: "100%" }}
                  />
              </Col>
              </Row>
              <h4 style={{ paddingTop:"40px", letterSpacing: "2px", textAlign: "justify" }}><strong><i>2. China indie Game Alliance 48h Game Jam - Chengdu Site</i></strong></h4>
              <div className="NormalText">Five of us attended and demonstrated the 1-bit art style tower defense game <span className="ShiningText">'Touch In the End of World' </span> during Summer vacation, 2023 at Chengdu.</div>
              <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                  <Col md={4} className="video-outline">
                      <img
                          src={GJ4}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={GJ5}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={GJ6}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default Projects;
