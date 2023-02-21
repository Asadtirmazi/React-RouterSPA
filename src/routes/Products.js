import { Link } from "react-router-dom";

const Products = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p2", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      {Products.map((e) => (
        <li key={e.id}>
          <Link to={`/products/${e.id}`}>{e.title}</Link>
        </li>
      ))}
    </>
  );
}

export default ProductsPage;
