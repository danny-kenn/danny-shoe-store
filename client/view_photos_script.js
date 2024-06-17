// dashboard_script.js

document.getElementById('shoeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const shoeImage = document.getElementById('shoeImage').files[0];
    const shoeSize = document.getElementById('shoeSize').value;
    const shoeType = document.getElementById('shoeType').value;
    const shoeMaterial = document.getElementById('shoeMaterial').value;
    const shoeLocation = document.getElementById('shoeLocation').value;
    const shoeShop = document.getElementById('shoeShop').value;
    const shoePrice = document.getElementById('shoePrice').value;
    const shoeWarranty = document.getElementById('shoeWarranty').value;
    const shoeDescription = document.getElementById('shoeDescription').value;
    const shoeStock = document.getElementById('shoeStock').value;

    const reader = new FileReader();
    reader.onload = function(event) {
        const shoeGallery = document.getElementById('shoeGallery');
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe-card');
        shoeCard.innerHTML = `
            <img src="${event.target.result}" alt="Shoe Image">
            <p><strong>Size:</strong> ${shoeSize}</p>
            <p><strong>Type:</strong> ${shoeType}</p>
            <p><strong>Material:</strong> ${shoeMaterial}</p>
            <p><strong>Location:</strong> ${shoeLocation}</p>
            <p><strong>Shop:</strong> ${shoeShop}</p>
            <p><strong>Price:</strong> ${shoePrice}</p>
            <p><strong>Warranty:</strong> ${shoeWarranty}</p>
            <p><strong>Description:</strong> ${shoeDescription}</p>
            <p><strong>Stock Status:</strong> ${shoeStock}</p>
            <button class="delete-button" onclick="deleteShoeCard(this)">Delete</button>
        `;
        shoeGallery.appendChild(shoeCard);

        // Save to localStorage
        const shoeData = {
            imageSrc: event.target.result,
            size: shoeSize,
            type: shoeType,
            material: shoeMaterial,
            location: shoeLocation,
            shop: shoeShop,
            price: shoePrice,
            warranty: shoeWarranty,
            description: shoeDescription,
            stock: shoeStock
        };
        saveShoeData(shoeData);
    };
    reader.readAsDataURL(shoeImage);

    // Reset the form
    document.getElementById('shoeForm').reset();
});

function saveShoeData(shoeData) {
    const shoeList = JSON.parse(localStorage.getItem('shoeList')) || [];
    shoeList.push(shoeData);
    localStorage.setItem('shoeList', JSON.stringify(shoeList));
}

function deleteShoeCard(button) {
    const confirmDelete = confirm('Are you sure you want to delete this shoe information?');
    if (confirmDelete) {
        const shoeCard = button.parentElement;
        const shoeGallery = shoeCard.parentElement;
        const shoeIndex = Array.from(shoeGallery.children).indexOf(shoeCard);
        shoeCard.remove();

        // Remove from localStorage
        const shoeList = JSON.parse(localStorage.getItem('shoeList')) || [];
        shoeList.splice(shoeIndex, 1);
        localStorage.setItem('shoeList', JSON.stringify(shoeList));
    }
}
