import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;

interface Category {
  id: number;
  title: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        Our Categories
      </Title>

      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      {category.title}
                    </Title>
                    <Text style={{ color: "#ddd" }}>
                      {category.count} Products
                    </Text>
                  </div>
                </div>
              }
              bodyStyle={{ display: "none" }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategorySection;
