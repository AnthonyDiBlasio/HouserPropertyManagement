import Carousel from 'react-bootstrap/Carousel';
import Mower from './images/noun-lawn-mower-197583.png'
import Trim from './images/noun-trimming-grass-2147133.png'
import Mulch from './images/noun-mulching-4474764.png'
import Snow from './images/noun-snow-plow-4946438.png'
import Commercial from './images/noun-lawn-trimming-2146829.png'
import Tree from './images/noun-tree-trimming-2057492.png'
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
import photo9 from './images/photo9.jpg'
import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'

import logo from './images/houserlogo-removebg-preview.png'


function Home() {
    return (
        <div className='container'>
            <section className='header'>
                <div >
                    <img className='ImgOverlay'style={{ marginTop: "5pc" }} src={logo} alt='imgoverlay'></img>
                    <div className='text-center'>Rooted In Quality, Growing in Trust
                    <p>Houser Property Management has been servicing the greater Bucks County area for over 7 years. The team</p>
                    </div>
                </div>
            </section>
         <section style={{backgroundColor: ""}} className='row'>
                <div style={{marginBottom:"5pc"}} className='text-center services'>Services Offered</div>
                <div className='col col-2'>Landscaping
                    <img style={{ height: "100px" }} src={Mower} alt='mow'></img>
                </div>
                <div className='col col-2'>Hardscaping
                    <img style={{ height: "100px" }} src={Commercial} alt='com'></img>
                </div>
                <div className='col col-2'>Tree Care
                    <img style={{ height: "100px" }} src={Tree} alt='tree'></img>
                </div>
                <div className='col col-2'>Mulching
                    <img style={{ height: "100px" }} src={Mulch} alt='mdivch'></img>
                </div>
                <div className='col-2'>Pruning/Trimming
                    <img style={{height: "100px" }} src={Trim} alt='trim'></img>
                </div>
                <div className='col col-2'>Snow Removal
                    <img style={{ height: "100px" }} src={Snow} alt='snow'></img>
                </div>
                <div className='text-center call'>Call (215)-470-5755 Today For a Free Qoute</div>
                <section className='PhotoGroup'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo5}
                            alt="fifth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo6}
                            alt="sixth slide"
                        />
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={photo7}
                                alt="7th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={photo8}
                                alt="8th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={photo9}
                                alt="9th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={photo10}
                                alt="10th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={photo11}
                                alt="11th slide"
                            />
                        </Carousel.Item>

                    </Carousel.Item>
                </Carousel>
            </section>

            </section>
         
        </div>
    );
}

export default Home;