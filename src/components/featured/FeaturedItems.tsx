import { Card, Col, Row, Button } from "antd";
import { ProductType } from "@/types/product";
import Image from "next/image";

interface FeaturedItemsProps {
  title: string;
  products: ProductType[];
}

const FeaturedItems: React.FC<FeaturedItemsProps> = ({ title, products }) => {
  return (
    <div
      style={{
        margin: "50px 0",
        background: "#f8f9fa",
        padding: "40px 20px",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {title}
      </h2>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} key={product.id}>
            <Card
              hoverable
              cover={
                <div style={{ height: "200px", position: "relative" }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              }
              style={{ borderRadius: "8px", overflow: "hidden" }}
              actions={[
                <Button key="view" type="link">
                  View Details
                </Button>,
                <Button
                  key="add"
                  type="primary"
                  style={{ background: "#ff6b6b", borderColor: "#ff6b6b" }}
                >
                  Add to Cart
                </Button>,
              ]}
            >
              <Card.Meta
                title={
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{product.title}</span>
                    <span style={{ color: "#ff6b6b" }}>${product.price}</span>
                  </div>
                }
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedItems;
