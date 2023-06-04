import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../assets/home/01.jpg"
import image2 from "../../../assets/home/02.jpg"
import image3 from "../../../assets/home/03.png"
import image4 from "../../../assets/home/04.jpg"
const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;