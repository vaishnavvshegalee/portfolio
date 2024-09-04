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
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2" />
        </section>
    )
}