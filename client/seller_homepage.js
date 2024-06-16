// seller_homepage.js
document.addEventListener('DOMContentLoaded', function() {
    const user = getUserData();
    if (user) {
        document.getElementById('firstName').textContent = user.firstName;
        document.getElementById('lastName').textContent = user.lastName;
    }

    const dashboardButton = document.getElementById('dashboardButton');
    checkAllComplete(dashboardButton);

    // Initially mark Shop Information as complete
    updateButtonStatus(document.getElementById('shopInfoButton'), true);
});

function handleButtonClick(infoType) {
    const isComplete = checkInfo(infoType);
    if (!isComplete) {
        window.location.href = `${infoType}.html`;
    }
    updateButtonStatus(document.getElementById(`${infoType}Button`), isComplete);
    checkAllComplete(document.getElementById('dashboardButton'));
}

function checkInfo(infoType) {
    switch(infoType) {
        case 'shopInfo': return checkShopInfo();
        case 'businessInfo': return checkBusinessInfo();
        case 'shippingInfo': return checkShippingInfo();
        case 'paymentInfo': return checkPaymentInfo();
        case 'additionalInfo': return checkAdditionalInfo();
        default: return false;
    }
}

function updateButtonStatus(button, isComplete) {
    if (isComplete) {
        button.classList.remove('pending');
        button.classList.add('complete');
        button.querySelector('p').textContent = 'Complete ✅';
    } else {
        button.classList.remove('complete');
        button.classList.add('pending');
        button.querySelector('p').textContent = 'Pending';
    }
}

function checkAllComplete(dashboardButton) {
    const allComplete = [
        checkShopInfo(),
        checkBusinessInfo(),
        checkShippingInfo(),
        checkPaymentInfo(),
        checkAdditionalInfo()
    ].every(status => status === true);

    if (allComplete) {
        dashboardButton.classList.remove('inactive');
        dashboardButton.disabled = false;
    } else {
        dashboardButton.classList.add('inactive');
        dashboardButton.disabled = true;
    }
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
    } else {
        sidebar.style.left = '0px';
        overlay.style.display = 'block';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
}

function deleteAccount() {
    const confirmDelete = confirm('Are you sure you want to delete your account?');
    if (confirmDelete) {
        alert('Account deleted successfully.');
        window.location.href = 'seller_registration.html';
    }
}
