# Zinnia Attire

This project is a simple e-commerce application built with React. It allows users to browse products, add items to their cart, and view the items in a modal shopping cart. The cart's state is managed globally through the `CartContext`, ensuring that all components have access to the necessary cart functionality.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

<!-- PROJECT LOGO -->
<br />
<div align="center">
 <a href="https://zinniaattire-ester.netlify.app/">
    <img src="src\assets\logo.webp" alt="Logo" height="80">
  </a>
  <h1 align="center">Zinnia Attire</h1>

  <p align="center">
    <a href="https://zinniaattire-ester.netlify.app/">View Demo</a>
  </p>
</div>

## Features

- **Add to Cart**: Users can add products to their cart by clicking the "Add to Cart" button on any product.
- **View Cart**: The cart is accessible via a button in the header, which opens a modal showing the selected items.
- **Update Cart Quantity**: Users can increase or decrease the quantity of each item directly from the cart.
- **Sticky Header**: The header becomes sticky when the user scrolls down.
- **Dynamic Cart Total**: The cart displays the total price based on the items and quantities added.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   cd zinnia-website

3. **Install dependencies:**

   npm install

## Context API

The cart functionality is managed globally through the CartContext, which provides:

- items: An array of objects representing products in the cart.
- addItemToCart(id): Adds a product to the cart by its id.
- updateItemQuantity(id, amount): Updates the quantity of a product in the cart.

## React Hooks used in this project

- useState
- useRef
- useContext
- useImperativeHandle

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like
