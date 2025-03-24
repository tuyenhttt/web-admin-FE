import { Image } from "antd";
import React, { useState } from "react";

const ExploreSection = () => {
  const categories = [
    "Cake",
    "Muffins",
    "Croissant",
    "Bread",
    "Tart",
    "Favorite",
  ];

  const imagePaths = [
    "/slider1.png",
    "/slider2.webp",
    "/slider3.png",
    "/slider4.jpg",
    "/slider5.png",
    "/slider6.png",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="explore-more" style={{ margin: "60px 0" }}>
      <h2 style={{ textAlign: "center", margin: "30px 0", fontSize: "30px" }}>
        Explore More
      </h2>

      {/* Category Tabs */}
      <div
        className="category-tabs"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0 30px 0",
          paddingBottom: "10px",
        }}
      >
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              color: selectedCategory === category ? "#993300" : "#555",
              borderBottom:
                selectedCategory === category ? "2px solid #993300" : "none",
              paddingBottom: "5px",
              cursor: "pointer",
              fontWeight: selectedCategory === category ? "bold" : "normal",
              transition: "color 0.3s ease",
            }}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Category Grid */}
      <div
        className="category-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {imagePaths.map((image, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "250px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              src={image}
              alt={`Bakery item ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
