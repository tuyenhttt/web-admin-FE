import React from "react";

const PromoSection = () => {
  return (
    <div
      className="promo-banner"
      style={{
        backgroundImage: 'url("/slider1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 20px",
        margin: "60px 0",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#993300",
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          20% Off Your First Order
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="learn-more-btn"
            style={{
              backgroundColor: "#993300",
              color: "white",
              border: "none",
              padding: "12px 28px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 4px rgba(153, 51, 0, 0.3)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#7A2900")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#993300")
            }
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="promo-image" style={{ display: "none" }}>
        {/* Có thể thêm hình ảnh sản phẩm khuyến mãi ở đây */}
      </div>
    </div>
  );
};

export default PromoSection;
