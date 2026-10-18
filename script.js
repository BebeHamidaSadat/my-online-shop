document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    let count = 0;
    let total = 0;

    cartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".card");
            const name = card.querySelector(".card-title").textContent.trim();
            const price = Number(
                card.querySelector(".card-text").textContent
                    .replace("$", "")
                    .trim()
            );

            if (!cartItems || !cartCount || !cartTotal ||
                !Number.isFinite(price) || price < 0) {
                return;
            }

            if (count === 0) {
                cartItems.innerHTML = "";
            }

            const item = document.createElement("p");
            item.textContent = `${name} - $${price.toFixed(2)}`;
            cartItems.appendChild(item);

            count++;
            total += price;

            cartCount.textContent = count;
            cartTotal.textContent = total.toFixed(2);
        });
    });
});