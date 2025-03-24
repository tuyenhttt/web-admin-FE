import { Carousel, Image } from "antd";

interface HeroCarouselProps {
  images: string[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  return (
    <Carousel
      autoplay
      dots
      style={{
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      {images.map((src, index) => (
        <div key={index}>
          <Image
            src={src}
            alt={`Slider ${index + 1}`}
            width="100%"
            height={550}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
