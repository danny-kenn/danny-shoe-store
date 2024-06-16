// dashboard_script.js

document.getElementById('shoeGender').addEventListener('change', updateShoeSizes);

function updateShoeSizes() {
    const gender = document.getElementById('shoeGender').value;
    const shoeSize = document.getElementById('shoeSize');
    shoeSize.innerHTML = '<option value="">Select Size</option>';

    let sizeOptions = [];

    switch(gender) {
        case 'Man':
            sizeOptions = Array.from({length: 15}, (_, i) => i + 34);
            break;
        case 'Woman':
            sizeOptions = Array.from({length: 20}, (_, i) => i + 26);
            break;
        case 'Boy':
            sizeOptions = Array.from({length: 40}, (_, i) => i + 5);
            break;
        case 'Girl':
            sizeOptions = Array.from({length: 40}, (_, i) => i + 3);
            break;
        default:
            sizeOptions = Array.from({length: 28}, (_, i) => i + 20);
    }

    sizeOptions.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.text = size;
        shoeSize.appendChild(option);
    });
}

document.getElementById('shoeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const shoeImage = document.getElementById('shoeImage').files[0];
    const shoeGender = document.getElementById('shoeGender').value;
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
        const shoeData = {
            id: Date.now(),
            image: event.target.result,
            gender: shoeGender,
            size: shoeSize,
            type: shoeType,
            material: shoeMaterial,
            location: shoeLocation,
            shop: shoeShop,
            price: shoePrice,
            warranty: shoeWarranty,
            description: shoeDescription,
            stock: shoeStock,
        };

        saveShoeData(shoeData);
        displayShoeGallery();
    };

    reader.readAsDataURL(shoeImage);

    this.reset();
    updateShoeSizes();
});

function saveShoeData(shoeData) {
    const shoes = JSON.parse(localStorage.getItem('shoes')) || [];
    shoes.push(shoeData);
    localStorage.setItem('shoes', JSON.stringify(shoes));
}

function displayShoeGallery() {
    const shoes = JSON.parse(localStorage.getItem('shoes')) || [];
    const shoeGallery = document.getElementById('shoeGallery');
    shoeGallery.innerHTML = '';

    shoes.forEach(shoe => {
        const shoeItem = document.createElement('div');
        shoeItem.className = 'shoeItem';

        shoeItem.innerHTML = `
            <img src="${shoe.image}" alt="Shoe Image">
            <div class="shoeDetails">
                <p><strong>Gender:</strong> ${shoe.gender}</p>
                <p><strong>Size:</strong> ${shoe.size}</p>
                <p><strong>Type:</strong> ${shoe.type}</p>
                <p><strong>Material:</strong> ${shoe.material}</p>
                <p><strong>Location:</strong> ${shoe.location}</p>
                <p><strong>Shop:</strong> ${shoe.shop}</p>
                <p><strong>Price:</strong> ${shoe.price}</p>
                <p><strong>Warranty:</strong> ${shoe.warranty}</p>
                <p><strong>Description:</strong> ${shoe.description}</p>
                <p><strong>Stock Status:</strong> <span class="stockStatus" data-id="${shoe.id}">${shoe.stock}</span></p>
                <div class="shoeActions">
                    <button class="edit" onclick="editShoe(${shoe.id})">Edit</button>
                    <button onclick="deleteShoe(${shoe.id})">Delete</button>
                </div>
            </div>
        `;

        shoeGallery.appendChild(shoeItem);
    });
}

function deleteShoe(id) {
    const shoes = JSON.parse(localStorage.getItem('shoes')) || [];
    const updatedShoes = shoes.filter(shoe => shoe.id !== id);
    localStorage.setItem('shoes', JSON.stringify(updatedShoes));
    displayShoeGallery();
}

function editShoe(id) {
    const shoes = JSON.parse(localStorage.getItem('shoes')) || [];
    const shoe = shoes.find(shoe => shoe.id === id);

    if (shoe) {
        document.getElementById('shoeGender').value = shoe.gender;
        updateShoeSizes();
        document.getElementById('shoeSize').value = shoe.size;
        document.getElementById('shoeType').value = shoe.type;
        document.getElementById('shoeMaterial').value = shoe.material;
        document.getElementById('shoeLocation').value = shoe.location;
        document.getElementById('shoeShop').value = shoe.shop;
        document.getElementById('shoePrice').value = shoe.price;
        document.getElementById('shoeWarranty').value = shoe.warranty;
        document.getElementById('shoeDescription').value = shoe.description;
        document.getElementById('shoeStock').value = shoe.stock;

        deleteShoe(id);
    }
}

document.addEventListener('DOMContentLoaded', displayShoeGallery);
