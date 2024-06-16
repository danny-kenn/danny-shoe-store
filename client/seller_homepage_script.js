
// Function to check if all container buttons are complete
function checkAllComplete() {
    let shopInfoStatus = document.getElementById('shopInfoStatus').innerText.trim();
    let businessInfoStatus = document.getElementById('businessInfoStatus').innerText.trim();
    let shippingInfoStatus = document.getElementById('shippingInfoStatus').innerText.trim();
    let paymentInfoStatus = document.getElementById('paymentInfoStatus').innerText.trim();
    let additionalInfoStatus = document.getElementById('additionalInfoStatus').innerText.trim();

    return (
        shopInfoStatus === 'Complete' &&
        businessInfoStatus === 'Complete' &&
        shippingInfoStatus === 'Complete' &&
        paymentInfoStatus === 'Complete' &&
        additionalInfoStatus === 'Complete'
    );
}

// Function to toggle the sidebar
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let overlay = document.getElementById('overlay');
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        overlay.style.display = "block";
    } else {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
    }
}

// Set the welcome message
document.getElementById('firstName').innerText = localStorage.getItem('firstName');
document.getElementById('lastName').innerText = localStorage.getItem('lastName');

// Check if all container buttons are complete and enable/disable dashboard button accordingly
document.getElementById('dashboardButton').disabled = !checkAllComplete();



