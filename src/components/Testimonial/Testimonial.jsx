import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/home/hero1.svg";
import img2 from "../../assets/images/home/hero5.svg";
import img3 from "../../assets/images/home/hero8.svg";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="container w-50">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          transitionTime={1500}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          showIndicators={true}
        >
          <div>
            <img src={img1} alt="" height={"200px"} />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>

          <div>
            <img src={img2} alt="" height={"200px"} />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div>
            <img src={img3} alt="" height={"200px"} />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
