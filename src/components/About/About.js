import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import HuaiShi from "../../Assets/Arts/HuaiShi.png";
import Dancing from "../../Assets/Arts/Dancing.png";
import PinCou from "../../Assets/Arts/PinCou.png";
import ZhiPin1 from "../../Assets/Arts/ZhiPin1.png";
import ZhiPin2 from "../../Assets/Arts/ZhiPin2.png";
import ZhiPin3 from "../../Assets/Arts/ZhiPin3.png";
import ZhiPin4 from "../../Assets/Arts/ZhiPin4.png";
import ZhiPin5 from "../../Assets/Arts/ZhiPin5.png";
import ZhiPin6 from "../../Assets/Arts/ZhiPin6.png";
import Retro1 from "../../Assets/Arts/Retro1.png";
import Retro2 from "../../Assets/Arts/Retro2.png";
import Retro3 from "../../Assets/Arts/Retro3.png";
import Retro4 from "../../Assets/Arts/Retro4.png";
import Retro5 from "../../Assets/Arts/Retro5.png";
import Poe1 from "../../Assets/Arts/Poe1.png";
import Poe2 from "../../Assets/Arts/Poe2.png";
import Poe3 from "../../Assets/Arts/Poe3.png";
import "../../style.css";
import {
    SiBilibili
} from "react-icons/si";

function About() {

  return (
    <div className="project-section">
        <div className="PortalSubTitle">Video Editing</div>
      <Container>
            <div className="NormalText">The director, editor, animator, and artist roles <span className="ShiningText">were all fulfilled by me </span>for this project.</div>
            <div className="NormalText">The main platform I upload my video is <span className="ShiningText">Bilibili&nbsp;</span> <SiBilibili />,
                  which is a popular video and social platform in China, where I earned more than <span className="ShiningText">8k</span> followers and <span className="ShiningText">100k</span> likes. You can find this exterior link on the footer.
            </div>
              <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                  <Col md={4} className="video-outline">
                      <img
                          src={Dancing}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4>Abnormality Dancin'girl</h4>
                      <Button
                          href="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EWj49HGmxldBmHV-YQKj9uMBQkIFDAztQXl17kKbanEIDg?e=Da8M07"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          <CgWebsite /> &nbsp;
                          {"Link"}
                      </Button>
                      <Button
                          href="https://www.bilibili.com/video/BV1uZ4y1S7DE/"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          {"Online-Media"}
                      </Button>
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={HuaiShi}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4>We Should Not Do Bad Things</h4>
                      <Button
                          href="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/ESWgXlFveVRJsIBTLSnUom0BsjDmvi--JBFjIQ_rvMRWBA?e=7TGroy"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          <CgWebsite /> &nbsp;
                          {"Link"}
                      </Button>
                      <Button
                          href="https://www.bilibili.com/video/BV1y64y147YT/"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          {"Online-Media"}
                      </Button>
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={PinCou}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4>Patchwork Staccato</h4>
                      <Button
                          href="https://gla-my.sharepoint.com/:v:/g/personal/2614344g_student_gla_ac_uk/EWrJmeT_us9CjlDY5Bqd0ZYBInWEHGj-h2m9sa3IFKofFA?e=2GcYnv"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          <CgWebsite /> &nbsp;
                          {"Link"}
                      </Button>
                      <Button
                          href="https://www.bilibili.com/video/BV1gE41197Mw/"
                          target="_blank"
                          style={{ margin: "10px" }}
                      >
                          {"Online-Media"}
                      </Button>
                  </Col>
              </Row>

              <div className="PortalSubTitle">Artwork Series</div>
              <h4 style={{ letterSpacing: "2px", textAlign: "justify" }}><strong><i>1. Interstellar Cleanse Project - Game's Byproduct Art Design</i></strong></h4>
              <div className="NormalText">These byproducts were sold on offline events held in Chengdu, November. We have ordered <span className="ShiningText">500</span> products and made profits,
                  for our own game. The andorid version is also available for downloading and receivng feedbacks to further enhancement.</div>
              <Row style={{ justifyContent: "center" }}>
              <Col md={4} className="video-outline">
                  <img
                      src={ZhiPin1}
                      alt="card-img"
                      style={{ width: "100%" }}
                      />
                      <h4>Exhibition</h4>
              </Col>
              <Col md={4} className="video-outline">
                      <img
                          src={ZhiPin2}
                      alt="card-img"
                      style={{ width: "100%" }}
                      />
                      <h4>Postcards - frontside</h4>
              </Col>
              <Col md={4} className="video-outline">
                      <img
                          src={ZhiPin3}
                      alt="card-img"
                      style={{ width: "100%" }}
                      />
                      <h4>Postcards - backside</h4>
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={ZhiPin4}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4>Enemy Keychain</h4>
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={ZhiPin5}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4 style={{ paddingBottom:"20px" }}>Stamp Keychain</h4>
                          <Button
                          href="https://weidian.com/?userid=1696551633&spider_token=cac2"
                              target="_blank"
                              style={{ margin: "10px" }}
                          >
                              <CgWebsite /> &nbsp;
                              {"Online Shop"}
                          </Button>
                          <Button
                          href="https://www.taptap.cn/app/427796"
                              target="_blank"
                              style={{ margin: "10px" }}
                          >
                              {"Andorid Forums"}
                          </Button>
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={ZhiPin6}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                      <h4>Poster</h4>
                  </Col>
              </Row>

              <h4 style={{ paddingTop: "30px", letterSpacing: "2px", textAlign: "justify" }}><strong><i>2. Retro Adventure - A Series of 20th Century Video Game Recreations</i></strong></h4>
              <div className="NormalText">The painting and formatting jobs were all done by me.</div>
              <div className="NormalText">"Retro Adventure" is an adventure game design based on retro games,
                  composed of games such as Minesweeper, War of Hearts, Spider Solitaire, and chess. It aims to explore the unknown.</div>
              <Row style={{ justifyContent: "center" }}>
                  <Col md={4} className="video-outline">
                      <img
                          src={Retro1}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Retro2}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Retro3}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Retro4}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Retro5}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
              </Row>

              <h4 style={{ paddingTop: "30px", letterSpacing: "2px", textAlign: "justify" }}><strong><i>3. Poetry Journey <span className="purple"> - A Puzzle-solving Game Design with Chinese Poetry</span></i></strong></h4>
              <div className="NormalText">The painting and formatting jobs were all done by me.</div>
              <div className="NormalText">"Poetry Journey" uses the Luoyang River map as a clue and tells the story of Ben Suleiman,
                  a messenger from the Silk Road, and Xue Tao, a poet from China.</div>
              <Row style={{ justifyContent: "center" }}>
                  <Col md={4} className="video-outline">
                      <img
                          src={Poe1}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Poe2}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
                  <Col md={4} className="video-outline">
                      <img
                          src={Poe3}
                          alt="card-img"
                          style={{ width: "100%" }}
                      />
                  </Col>
              </Row>
      </Container>
    </div>
  );
}

export default About;
