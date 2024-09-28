export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Wear Your Confidence</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
