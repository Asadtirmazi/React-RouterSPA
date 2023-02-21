import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>Products Details</h1>
      <p>{params.productID}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
export default ProductDetails;
