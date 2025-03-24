import React from "react";

const AboutSection = () => {
  return (
    <div
      className="about-us"
      style={{
        backgroundImage: 'url("/slider1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        margin: "60px 0",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        position: "relative",
      }}
    >
      {/* Overlay để làm nền tối hơn cho text dễ đọc */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          maxWidth: "600px",
          position: "relative", // Đảm bảo nội dung hiển thị trên overlay
          zIndex: 1,
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            color: "#fff",
            margin: "20px auto",
            fontSize: "16px",
            lineHeight: "1.8",
            maxWidth: "500px",
          }}
        >
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis.
        </p>
        <button
          className="read-more-btn"
          style={{
            backgroundColor: "#993300",
            color: "white",
            border: "none",
            padding: "12px 28px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#7A2900")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#993300")
          }
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
