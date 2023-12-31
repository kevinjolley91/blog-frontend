/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images} alt={product.name} />
        </div>
      ))}
    </div>
  );
}
