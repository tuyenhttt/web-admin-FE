import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types/product";

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col key={product.id} span={8}>
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
