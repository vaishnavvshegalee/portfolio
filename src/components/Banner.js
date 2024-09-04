import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from '../assets/img/header-img.svg'
import { useEffect, useState } from "react"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";
export const Banner = () => {
    const [loopNum, setLopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Frontend Developer', 'Nodejs Developer', 'FullStack Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLopNum(loopNum + 1);
            setDelta(500);
        }
    }
    const myResume = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1hECn3OUjlJWT_G_yddu87fG2kWgT1Jsn/view?usp=sharing';
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Vaishnav Shegale `} <span className="wrap">{text}</span></h1>
                                <p>As a passionate and diligent fresher, proficient in MEAN and MERN
                                    stack development,I bring a strong foundation in JavaScript, Node.js, MongoDB,
                                    Express.js, React.js and AngularWith a keep eye for detail and commitment to continuous
                                    learning, I am eager to contribute to dynamic projects while
                                    enhancing my skills in full stack web development.
                                    My adaptability and problem-solving abilities make me a valuable
                                    asset to any team, poised to drive innovation and deliver
                                    exceptional result in the fast-paced world of software
                                    development.</p>
                                <button onClick={() => myResume()} >Resume<ArrowRightCircle /> </button>
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}