document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.add-to-cart').hasAttribute('data-event-listener')) {
        function addToCart(product) {
            var cartItem = document.querySelector('#cart .cart-item[data-product-id="' + product.id + '"]');
            if (cartItem) {
                var quantity = cartItem.querySelector('.quantity');
                quantity.innerText = parseInt(quantity.innerText) + 1;
            } else {
                var cart = document.querySelector('#cart');
                var cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.setAttribute('data-product-id', product.id);
                cartItem.innerHTML = `
                    <span>${product.name} - $${product.price} - <span class="quantity">1</span></span>
                    <button class="remove" data-product-id="${product.id}">Remove</button>
                `;
                cart.appendChild(cartItem);
            }
            alert(product.name + ' has been added to the cart.');
        }

        function removeFromCart(productId) {
            var cartItem = document.querySelector('#cart .cart-item[data-product-id="' + productId + '"]');
            var quantity = cartItem.querySelector('.quantity');
            var newQuantity = parseInt(quantity.innerText) - 1;
            if (newQuantity > 0) {
                quantity.innerText = newQuantity;
            } else {
                cartItem.remove();
            }
        }

        document.querySelectorAll('.add-to-cart').forEach(function(button) {
            button.addEventListener('click', function() {
                console.log('Add to cart clicked for product', button.getAttribute('data-product-id'));
                var product = {
                    id: button.getAttribute('data-product-id'),
                    name: button.getAttribute('data-product-name'),
                    price: button.getAttribute('data-product-price')
                };
                addToCart(product);
            });
        });

        document.getElementById('cart').addEventListener('click', function(event) {
            if (event.target.classList.contains('remove')) {
                var productId = event.target.getAttribute('data-product-id');
                removeFromCart(productId);
            }
        });

        document.querySelector('.add-to-cart').setAttribute('data-event-listener', 'attached');
    }
});
