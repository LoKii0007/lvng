import React from 'react'
import "../css/page.css"

export default function Page() {
    return (
        <>
            <div className="component-1 position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="home-lines d-flex position-absolute justify-content-center">
                    <div className="box-1">
                        <div className="box1-spacing1"></div>
                        <div className="box1-spacing2"></div>
                        <div className="box1-spacing3"></div>
                        <div className="box1-spacing4"></div>
                        <div className="box1-spacing5"></div>
                    </div>
                    <div className="box-2">
                        <div className="box2-spacing1"></div>
                        <div className="box2-spacing2"></div>
                        <div className="box2-spacing3"></div>
                        <div className="box2-spacing4"></div>
                        <div className="box2-spacing5"></div>
                    </div>
                    <div className="box-3">
                        <div className="box3-spacing1"></div>
                        <div className="box3-spacing2"></div>
                        <div className="box3-spacing3"></div>
                        <div className="box3-spacing4"></div>
                        <div className="box3-spacing5"></div>
                    </div>
                </div>
                <div className="home-text py-5 d-flex flex-column justify-content-center">
                    <div className="comp1 px-5">
                        <div className="text-head text-left pt-5">
                            The future of home renting
                        </div>
                        <div className="text-desc text-left mx-3">
                            LVNG is a new way of thinking about living, buying, and owning real estate, as well for renting purposes.
                        </div>
                        <button className='my-5 mx-3'>
                            ORDER NOW
                        </button>
                    </div>
                </div>
                <div className="home-bg">
                    <video autoPlay muted loop className='loading-vid' src="/loading-vid.mp4"></video>
                </div>
                <div className="fulfill d-flex flex-column justify-content-center align-items-center">
                    <div className="fulfill-top">
                        FULFIL YOUR DREAMS
                    </div>
                    <div className="fulfill-middle text-center p-5">
                        LVNG is a modern, economical, and comfortable home <br /> that can be built in just 99 days from today.
                    </div>
                    <div className="fulfill-bottom d-flex me-3 justify-content-center align-items-center">
                        <div className="seb me-4">
                            <img className='seb-img' src="/seb.png" alt="" />
                        </div>
                        <div className="seb-desc d-flex flex-column">
                            <div className="found-name">
                                Sebastian Jakubiak
                            </div>
                            <div className="found-position">
                                CHIEF EXECUTIVE OFFICER, <br /> FOUNDER OF LVNG
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why position-relative d-flex flex-column justify-content-center align-items-center">
                    <div className="why-bg position-absolute">
                        <img src="/photo.avif" alt="" />
                    </div>
                    <div className="why-front">
                        <div className="why-head text-center">WHY LVNG?</div>
                        <div className="why-desc text-center">
                            Take a big step into <br /> the future of living
                        </div>
                    </div>
                </div>
                <div className="offer d-flex">
                    <div className="offer-left d-flex flex-column justify-content-center align-items-center">
                        <div className="offer-left-top px-4 pt-5">WHAT WE OFFER</div>
                        <div className="offer-left-bottom ">
                            <hr />
                            <div className="modern off-pt px-4">modern architecture & technology</div> <hr />
                            <div className="efficient off-pt px-4">efficient layout design</div> <hr />
                            <div className="short off-pt px-4">short implementation time</div> <hr />
                            <div className="years off-pt px-4">years of gurantees</div> <hr />
                        </div>
                    </div>
                    <div className="offer-right d-flex flex-column">
                        <div className="offer-right-top mt-5 ms-5 pt-5 px-5">
                            efficient layout design
                        </div>
                        <div className="offer-right-bottom ms-5 px-5 pt-3">
                            The house layout provides maximum efficiency for every square meter. It is equipped with three bedrooms, a closed office, two bathrooms, a toilet, and a living room with a kitchenette that can provide comfort for up to 6 residents.
                        </div>
                    </div>
                </div>
                <div className="offer-space"></div>
            </div>

            <div className="projects d-flex flex-column justify-content-center align-items-center">
                <div className="projects-top py-5 mt-5">OUR PROJECTS</div>
                <div className="projects-bottom d-flex justify-content-center align-items-center">
                    <div className="project-img">
                        <img src="/project.webp" alt="" />
                    </div>
                    <div className="alpha p-5 d-flex flex-column">
                        <div className="alpha-top">alpha</div>
                        <div className="alpha-desc"></div>
                        <button>learn more</button>
                    </div>
                </div>
                <div className='alpha-btns py-5'>
                    <button className='prev-btn'>PREVIOUS PROJECT</button>
                    <button className='next btn'>NEXT PROJECT</button>
                </div>
            </div>

            <div className="component-3 d-flex flex-column">
                <div className="comp3-top p-5">
                    <span style={{ fontWeight: "600" }}>WHAT ARE OUR DIFFERENTIATORS?</span> <br />
                    <span style={{ fontSize: "40px" }}>Innovation on multiple levels</span> <br />
                    Our house has been designed with attention to every <br /> detail, both technically and visually.
                </div>
                <div className="comp3-bottom d-flex flex-wrap">
                    <div className="comp3-div1 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Comfort & Space </span> <br />
                            Alpha house is an 84 m2 residential space with an optimal layout of rooms and modern design. The living room is illuminated by a window with a height of 6.8 meters and 2.9x3.0 meters glass terrace doors.
                        </div>
                    </div>
                    <div className="comp3-div2 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Quality & Craftsmanship </span> <br />
                            We only use high-quality and durable materials. Choose modern technology and proven solutions. The safety of residents, children and adults, is our priority
                        </div>
                    </div>
                    <div className="comp3-div3 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Web3 Ownership</span> <br />
                            Our products have a unique formula of ownership in digital form. By buying our home, you become the owner of a digital ownership token that unequivocally identifies its owner.

                        </div>
                    </div>
                    <div className="comp3-div4 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Web3 Ownership</span> <br />
                            Our products have a unique formula of ownership in digital form. By buying our home, you become the owner of a digital ownership token that unequivocally identifies its owner.

                        </div>
                    </div>
                    <div className="comp3-div5 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Web3 Ownership</span> <br />
                            Our products have a unique formula of ownership in digital form. By buying our home, you become the owner of a digital ownership token that unequivocally identifies its owner.

                        </div>
                    </div>
                    <div className="comp3-div6 comp3-div p-4 d-flex flex-column col-4">
                        <img src="" alt="" />
                        <div>
                            <span>Web3 Ownership</span> <br />
                            Our products have a unique formula of ownership in digital form. By buying our home, you become the owner of a digital ownership token that unequivocally identifies its owner.

                        </div>
                    </div>
                </div>
                <div className="comp3-space"></div>
            </div>

            <div className="component-4 position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="comp4-lines position-absolute d-flex justify-content-center">
                    <div className="box-1">
                        <div className="comp4-spacing1"></div>
                    </div>
                    <div className="box-2">
                        <div className="comp4-spacing2"></div>
                    </div>
                    <div className="box-3">
                        <div className="comp4-spacing3"></div>
                    </div>
                </div>
                <div className="comp4-front d-flex flex-column justify-content-center align-items-center">
                    <div className="comp4-top p-5 text-center">
                        PROCESS <br />
                        <span style={{fontSize:"50px"}}> move into three steps</span>
                    </div>
                    <div className="comp4-bottom d-flex">
                        <div className="process d-flex flex-column justify-content-center align-items-center">
                            <div className="process-vid">
                                <video src=""></video>
                            </div>
                            <div className="process-text text-center">
                                <span style={{ fontSize: "24px" }}>Fill out the form</span> <br />
                                At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.
                            </div>
                        </div>
                        <div className="process d-flex flex-column justify-content-center align-items-center">
                            <div className="process-vid">
                                <video src=""></video>
                            </div>
                            <div className="process-text text-center">
                                <span style={{ fontSize: "24px" }}>Fill out the form</span> <br />
                                At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.
                            </div>
                        </div>
                        <div className="process d-flex flex-column justify-content-center align-items-center">
                            <div className="process-vid">
                                <video src=""></video>
                            </div>
                            <div className="process-text text-center">
                                <span style={{ fontSize: "24px" }}>Fill out the form</span> <br />
                                At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.
                            </div>
                        </div>
                    </div>
                    <div className="process-btn py-4">
                        <button>ORDER NOW</button>
                    </div>
                </div>
                <div className="tech d-flex flex-column p-5 justify-content-center align-items-center">
                    <div>TECHNOLOGY & PARTNERS</div>
                    <div className='tech-2 pb-5'>Top quality solutions</div>
                </div>
            </div>
        </>
    )
}
