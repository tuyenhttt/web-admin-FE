import React from "react";

const FeaturedTreats = () => {
  const treats = [
    { name: "Puff Pastry", price: 8, image: "/slider1.png" },
    { name: "Doughnuts", price: 8, image: "/slider1.png" },
    { name: "Brownies", price: 8, image: "/slider1.png" },
  ];

  return (
    <div
      className="featured-treats"
      style={{
        margin: "80px 0",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: "0 0 40px 0",
          fontSize: "36px",
          fontWeight: "700",
          color: "#993300",
        }}
      >
        Featured Treats
      </h2>

      <div
        className="treats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {treats.map((treat, index) => (
          <div
            key={index}
            className="treat-item"
            style={{
              textAlign: "center",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#fff",
              padding: "0 0 20px 0",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div
              style={{
                overflow: "hidden",
                height: "240px",
                position: "relative",
              }}
            >
              <img
                src={treat.image}
                alt={treat.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            <h3
              style={{
                margin: "20px 0 8px 0",
                fontSize: "22px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {treat.name}
            </h3>

            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#993300",
                margin: "8px 0 15px 0",
              }}
            >
              ${treat.price}
            </p>

            <button
              style={{
                backgroundColor: "#993300",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#7A2900")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#993300")
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            color: "#993300",
            border: "2px solid #993300",
            padding: "12px 28px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#993300";
            e.currentTarget.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#993300";
          }}
        >
          View All Treats
        </button>
      </div>
    </div>
  );
};

export default FeaturedTreats;
