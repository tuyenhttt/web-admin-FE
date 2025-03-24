import { Button } from "antd";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 0",
        textAlign: "center",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "24px",
            maxWidth: "600px",
            margin: "0 auto 24px",
          }}
        >
          {subtitle}
        </p>
        <Button
          type="primary"
          size="large"
          style={{
            background: "#ff6b6b",
            borderColor: "#ff6b6b",
            minWidth: "150px",
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
