
      let cartQuantity = 0;

      // Display the cart quantity when the page loads.
      displayCartQuantity();

      function updateCartQuantity(change) {
        if (cartQuantity + change > 10) {
          alert('The cart is full');
          return;
        }

        if (cartQuantity + change < 0) {
          alert('Not enough items in the cart');
          return;
        }

        cartQuantity += change;

        // Display the cart quantity after updating.
        displayCartQuantity();
      }

      function displayCartQuantity() {
        document.querySelector('.js-cart-quantity')
          .innerHTML = `Cart quantity: ${cartQuantity}`;
      }