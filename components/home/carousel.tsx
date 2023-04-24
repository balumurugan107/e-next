import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselWrap } from "react-responsive-carousel";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import NextImage from "../NextImage";

export default function Carousel() {
  return (
    <div className="max-w-6xl m-auto rounded-xl">
      <CarouselWrap autoPlay infiniteLoop showThumbs={false}>
        <div className="relative aspect-[9/2]">
          <NextImage
            src={Carousel1}
            width="0"
            height="0"
            sizes="60%"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="w-full h-30 rounded-xl" alt={""}          />
        </div>
        <div className="relative aspect-[9/2]">
          <NextImage src={Carousel2} alt={""} 
          width="0"
          height="0"
          sizes="60%"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="w-full h-30 rounded-xl"  />
        </div>
        <div className="relative aspect-[9/2]">
          <NextImage src={Carousel3} alt={""} 
          width="0"
          height="0"
          sizes="60%"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="w-full h-30 rounded-xl" />
        </div>
      </CarouselWrap>
    </div>
  );
}
