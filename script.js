let totalAmount = 0;
let billDetails = "";

function addToBill(item, price, qtyId) {
    const quantity = document.getElementById(qtyId).value;
    const itemTotal = price * quantity;

    totalAmount += itemTotal;
    billDetails += `${item} (x${quantity}): $${itemTotal.toFixed(2)}<br>`;

    document.getElementById("bill-details").innerHTML = billDetails;
    document.getElementById("total-amount").innerHTML = `Total: $${totalAmount.toFixed(2)}`;
}
const menuItems = [
    { name: "Fries", price: 3.50, img: "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg", id: "Fries-qty" },
      { name: "chips", price: 2.50, img: "https://india.neelamfoodland.in/cdn/shop/products/IMG_3641_800x.jpg?v=1698400307", id: "chips-qty" },
      { name: "coldrinks", price: 8.00, img: "https://c8.alamy.com/comp/MGCHDE/poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company-and-pepsico-MGCHDE.jpg", id: "coldrinks-qty" },
      { name: "pasta", price: 6.00, img: "https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?cs=srgb&dl=pexels-enginakyurt-1460872.jpg&fm=jpg", id: "pasta-qty" },
      { name: "noodeles", price: 4.50, img: "https://media.istockphoto.com/id/1292637103/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=612x612&w=0&k=20&c=wp7gojub20NEMRABP1wIaDY6qq11eMFJZ2gqIjfht4g=", id: "noodeles-qty" },
      { name: "cake", price: 6.50, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: "cake-qty" },
      { name: "ice cream", price: 4.50, img: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=", id: "ice cream-qty" },
];


function renderMenu() {
    const menuContainer = document.querySelector(".menu");
    menuItems.forEach(item => {
        const menuItem = `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Price: $${item.price.toFixed(2)}</p>
                <input type="number" id="${item.id}" placeholder="Quantity" min="1" value="1">
                <button onclick="addToBill('${item.name}', ${item.price}, '${item.id}')">Add to Bill</button>
            </div>
        `;
        menuContainer.innerHTML += menuItem;
    });
}

window.onload = renderMenu;


function submitFeedback() {
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (!rating || rating < 1 || rating > 5) {
        alert("Please provide a valid rating between 1 and 5.");
        return;
    }

    const feedbackMessage = `
        <h3>Thank you for your feedback!</h3>
        <p><strong>Rating:</strong> ${rating}/5</p>
        <p><strong>Comments:</strong> ${comments || "No comments provided."}</p>
    `;

    document.getElementById("feedback-output").innerHTML = feedbackMessage;
    document.getElementById("feedback-form").reset();
}
