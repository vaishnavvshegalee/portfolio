import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import meter4 from '../assets/img/meter1.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills' >
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam qui laudantium tenetur dicta unde laborum nihil eveniet blanditiis numquam voluptatem molestiae, beatae earum facilis quae dolor vero nobis iste? Natus, autem?</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={meter1} alt="Image1" />
                                    <h5>Web development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image2" />
                                    <h5>Backend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image3" />
                                    <h5>Frontend development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image4" />
                                    <h5>FullStack development</h5>
                                </div>
                            </Carousel>
                        </div>

                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="color-sharp" className='background-image-left' />
        </section>
    )
}