import { Card, Image, Button } from "antd";
import Meta from "antd/es/card/Meta";
import { ProductType } from "@/types/product";

export const ProductCard: React.FC<Omit<ProductType, "id">> = ({
  image,
  title,
  price,
  description,
}) => (
  <Card
    size="small"
    variant="borderless"
    cover={<Image alt={title} src={image} />}
    style={{ backgroundColor: "black", color: "white" }}
    bodyStyle={{ padding: "12px" }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>${price}</div>
        <Meta
          title={<span style={{ color: "white" }}>{title}</span>}
          description={<span style={{ color: "white" }}>{description}</span>}
        />
      </div>
      <div>
        <Button
          style={{
            backgroundColor: "#C26D51",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </Button>
      </div>
    </div>
  </Card>
);

export default ProductCard;
