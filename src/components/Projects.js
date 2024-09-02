import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCards } from "./ProjectsCards";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projectImg1 from '../assets/img/project-img1.png';
import projectImg2 from '../assets/img/project-img2.png';
import projectImg3 from '../assets/img/project-img3.png';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
export const Projects = () => {
    const projects = [
        {
            title: 'Food Ordering Website',
            description: 'Food ordering website using Reactjs & Tailwind CSS',
            imgUrl: projectImg1
        },
        {
            title: 'Weather Forecast',
            description: 'Realtime fetching weather using React',
            imgUrl: projectImg2
        },
        {
            title: 'Mern todo application',
            description: 'Todo application using MERN stack',
            imgUrl: projectImg3
        },
        {
            title: 'Bigbasket clone using Mean',
            description: 'Bigbasket clone using MEAN Stack',
            imgUrl: projectImg2
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt recusandae nostrum vero aperiam ex reiciendis, voluptatum assumenda libero dolorum odio alias odit debitis hic nulla quod fuga beatae sequi quisquam est doloribus.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCards
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2" />
        </section>
    )
}