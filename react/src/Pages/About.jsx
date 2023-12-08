import AOS from "aos";
import "aos/dist/aos.css"
import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


function About(){
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
            <div className="heroAbout bg-black text-light container-fluid p-5 d-flex flex-column justify-content-center lh-lg" style={{minHeight:"80vh", textAlign:"justify"}} >
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="text-purple fw-bold text-center p-3">About Us</h1>
                    <p className="mx-auto text" style={{maxWidth:"80ch"}}>Welcome to COMPS, your ultimate destination for all your computing needs! We pride ourselves on being your reliable source for top-quality computer parts, boasting a diverse range tailored to suit any requirement or budget. Our skilled technicians offer a comprehensive suite of services, from precise diagnostics to fine-tuning system performance, ensuring your devices run at their best.
                    <br />
                    <br />
                    But our commitment goes beyond just products and services. At COMPS, we strive to create a welcoming environment where technology feels accessible to everyone. Whether you're a newcomer navigating the tech landscape or a seasoned enthusiast seeking specialized advice, our knowledgeable and approachable team is dedicated to providing personalized support. We're here to empower you with the confidence and guidance you need to make informed decisions about your tech journey. Join us at COMPS, where exceptional service and expertise converge to redefine your computing experience.</p>
                </div>
            </div>

            <div className="container-fluid bg-white text-black text-center p-5">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h5>Innovators</h5>
                    <h1 className="text-purple fw-bold">Meet Our Team</h1>
                    <p>Get to know the talented individuals behind our company</p>
                </div>

                <div className="d-flex my-5">
                    <div className="col-4" data-aos="zoom-in-up" data-aos-duration="1000">
                        <img className="img mx-auto mb-4" src="../src/images/carlos1_2.jpg" alt="" style={{maxWidth:"40%", borderRadius:"50%"}}/>
                        <h3 className='text-purple fw-bold' style={{letterSpacing:"1.7px"}}>Carlos Moritcho</h3>
                        <span className='fw-bold'>CEO</span>
                        <p className='p-3' style={{lineHeight:"1.7em"}}>Carlos, a visionary leader, brings a blend of strategic thinking and passion for technology to COMPS. With a track record of successful ventures, Carlos steers the company towards innovation and customer-centric solutions.</p>
                        <div className="links d-flex justify-content-center">
                            <Link to="https://www.facebook.com/carlos.f.moritcho" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link to="https://github.com/Gaviermax" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/carlos-gabriele-moritcho-600518217/" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>

                    <div className="col-4" data-aos="zoom-in-up" data-aos-duration="1000">
                        <img className="img mx-auto mb-4" src="../src/images/troy1.jpg" alt="" style={{maxWidth:"40%", borderRadius:"50%"}}/>
                        <h3 className='text-purple fw-bold' style={{letterSpacing:"1.7px"}}>Troy Demafeliz</h3>
                        <span className='fw-bold'>Lead Programmer</span>
                        <p className='p-3' style={{lineHeight:"1.7em"}}>Troy is the coding maestro at COMPS. With an unmatched knack for turning complex algorithms into user-friendly interfaces, Trot ensures that the website operates seamlessly, delivering an exceptional user experience.</p>
                        <div className="links d-flex justify-content-center">
                            <Link to="https://www.facebook.com/TrooyyyReddd" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link to="https://github.com/shifuuuuu" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/troy-demafeliz-81a1a6267/" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>

                    <div className="col-4"data-aos="zoom-in-up" data-aos-duration="1000">
                        <img className="img mx-auto mb-4" src="../src/images/david.png" alt="" style={{maxWidth:"40%", borderRadius:"50%"}}/>
                        <h3 className='text-purple fw-bold' style={{letterSpacing:"1.7px"}}>David Romanillos</h3>
                        <span className='fw-bold'>Customer Support Specialist</span>
                        <p className='p-3' style={{lineHeight:"1.7em"}}>David is the friendly face behind COMPS' customer support. His dedication to resolving queries and providing technical assistance ensures that customers have a smooth and satisfying experience.</p>
                        <div className="links d-flex justify-content-center" style={{marginTop:"45px"}}>
                            <Link to="https://www.facebook.com/david.romanillos.5" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link to="https://github.com/DaSawce" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/david-napoleon-l-romanillos-19b175265/" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-5 py-5">
                    <div className="col-6"data-aos="zoom-in-up" data-aos-duration="1000">
                        <img className="img mx-auto mb-4" src="../src/images/francis.JPG" alt="" style={{maxWidth:"30%", borderRadius:"50%"}}/>
                        <h3 className='text-purple fw-bold' style={{letterSpacing:"1.7px"}}>Francis Aguila</h3>
                        <span className='fw-bold'>Marketing Manager</span>
                        <p className='p-3' style={{lineHeight:"1.7em"}}>Francis spearheads the marketing efforts at COMPS. His creative campaigns and deep understanding of consumer behavior drive brand visibility and engagement across various digital platforms.</p>
                        <div className="links d-flex justify-content-center">
                            <Link to="https://www.facebook.com/FrancizAgz" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link to="https://github.com/itsFranciz" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/francis-drake-aguila-4a03a02a1/" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6"data-aos="zoom-in-up" data-aos-duration="1000">
                        <img className="img mx-auto mb-4" src="../src/images/ang.jpg" alt="" style={{maxWidth:"30%", borderRadius:"50%"}}/>
                        <h3 className='text-purple fw-bold' style={{letterSpacing:"1.7px"}}>Stephen Ang</h3>
                        <span className='fw-bold'>Product Manager</span>
                        <p className='p-3' style={{lineHeight:"1.7em"}}>Stephen meticulously curates the products featured on COMPS. His expertise in understanding market trends and consumer needs ensures that the store offers a diverse range of cutting-edge computer technology.</p>
                        <div className="links d-flex justify-content-center">
                            <Link to="https://www.facebook.com/MLGSteph360" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <Link to="https://github.com/Arichikuma" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/stephen-dave-ang-708103245/" target='_blank' className="text-purple mx-3 fs-3">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up-right" data-aos-duration="1000">
                    <h1 className="text-purple fw-bold">Join Us!</h1>
                    <p>We're looking for talented individuals to join our team.</p>
                </div>
            </div>

            <div className="heroAbout bg-black text-light container-fluid p-5 mt-5 d-flex flex-column justify-content-center lh-lg" style={{minHeight:"80vh", textAlign:"justify"}}>
                <h1 className="text-purple fw-bold text-center p-3" data-aos="fade-up" data-aos-duration="1000">Our History</h1>
                <p className="mx-auto text" style={{maxWidth:"80ch"}}data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >Comps, established in the technologically progressive year of 2045, emerged from the collective passion and expertise in computers shared among a close circle of friends. Bound by their unwavering enthusiasm for technology, this group embarked on a journey that would redefine the landscape of the computing industry. The inception of Comps was not merely a business endeavor but a realization of their shared dream—a space where their love for innovation and technology could thrive.
                From its humble beginnings, Comps blossomed into a dynamic enterprise, propelled by the synergy of friendship and a profound dedication to technological advancement. The early days were marked by an ardent commitment to quality and customer satisfaction, values that remain integral to Comps' ethos today. As the company flourished, so did the ethos of camaraderie and collaboration that formed its bedrock, fostering an environment where each team member felt valued, motivated, and empowered to contribute their best. </p>

                <p className="mx-auto text" style={{maxWidth:"80ch"}}data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                As Comps navigated the ever-evolving tech landscape, its growth was shaped by a relentless pursuit of excellence and a commitment to staying at the forefront of innovation. The team's unwavering dedication to pushing boundaries and embracing cutting-edge technology propelled Comps to new heights within the computer industry. This journey was not without its challenges, but each obstacle was met with resilience and a collective determination to overcome hurdles, reinforcing the team's unity and fortitude.
                </p>

                <p className="mx-auto text" style={{maxWidth:"80ch"}}data-aos="fade-up" data-aos-duration="1000"data-aos-delay="500">
                Today, as Comps looks back on its remarkable journey, the company stands tall, firmly rooted in the core values that inspired its inception. The spirit of camaraderie and a shared passion for technology continue to drive Comps forward, fueling the team's creativity, innovation, and commitment to delivering unparalleled products and services. Comps' rich history is a testament to a transformative power of friendship, perseverance, and a relentless pursuit of shaping a future where technology is not just a tool but a catalyst for endless possibilities.
                </p>
            </div>
        </>
    )
}

export default About;