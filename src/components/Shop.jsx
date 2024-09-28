export default function Shop({ children }) {
  return (
    <section id="shop" className="container">
      <h2>Wear Your Confidence</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
