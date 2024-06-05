document.addEventListener('DOMContentLoaded', function() {
    // Fetch user data
    const userData = getUserData();
    if (userData) {
        document.getElementById('firstName').textContent = userData.firstName;
        document.getElementById('lastName').textContent = userData.lastName;
    }

    // Check and display statuses
    displayStatus('shopInfoStatus', checkShopInfo());
    displayStatus('businessInfoStatus', checkBusinessInfo());
    displayStatus('shippingInfoStatus', checkShippingInfo());
    displayStatus('paymentInfoStatus', checkPaymentInfo());
    displayStatus('additionalInfoStatus', checkAdditionalInfo());

    // Enable dashboard button if all sections are complete
    checkCompletion();
});

function displayStatus(elementId, status) {
    const element = document.getElementById(elementId);
    if (status) {
        element.innerHTML = `<i class="fas fa-check-circle" style="color: green;"></i> Complete`;
    } else {
        element.innerHTML = `Pending`;
    }
}

function toggleSettings() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
}

function checkShopInfo() {
    const user = getUserData();
    if (!user) {
        return false;
    }
    return (
        user.firstName &&
        user.lastName &&
        user.email &&
        user.phoneNumber &&
        user.location
    );
}

function checkBusinessInfo() {
    const businessInfo = getBusinessInfo();
    if (!businessInfo) {
        return false;
    }
    return (
        businessInfo.businessName &&
        businessInfo.businessType &&
        businessInfo.businessRegistrationNumber &&
        businessInfo.businessLocation
    );
}

function checkShippingInfo() {
    const shippingInfo = getShippingInfo();
    if (!shippingInfo) {
        return false;
    }
    return (
        shippingInfo.shippingAddress &&
        shippingInfo.shippingMethod &&
        shippingInfo.deliveryTime
    );
}

function checkPaymentInfo() {
    const paymentInfo = getPaymentInfo();
    if (!paymentInfo) {
        return false;
    }
    return (
        paymentInfo.paymentMethod &&
        paymentInfo.cardNumber &&
        paymentInfo.expiryDate &&
        paymentInfo.securityCode
    );
}

function checkAdditionalInfo() {
    const additionalInfo = getAdditionalInfo();
    if (!additionalInfo) {
        return false;
    }
    return (
        additionalInfo.additionalDetails1 &&
        additionalInfo.additionalDetails2 &&
        additionalInfo.additionalDetails3
    );
}

function checkCompletion() {
    const shopComplete = checkShopInfo();
    const businessComplete = checkBusinessInfo();
    const shippingComplete = checkShippingInfo();
    const paymentComplete = checkPaymentInfo();
    const additionalComplete = checkAdditionalInfo();

    const dashboardButton = document.getElementById('dashboardButton');
    if (shopComplete && businessComplete && shippingComplete && paymentComplete && additionalComplete) {
        dashboardButton.removeAttribute('disabled');
    } else {
        dashboardButton.setAttribute('disabled', 'disabled');
    }
}

function goToDashboard() {
    // Implement redirection logic to dashboard page
    alert('Redirecting to your dashboard');
    // window.location.href = 'dashboard.html'; // Uncomment this line to actually redirect
}

function getUserData() {
    const userData = localStorage.getItem('sellerUser');
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
}

function getBusinessInfo() {
    const businessInfo = localStorage.getItem('businessInfo');
    if (businessInfo) {
        return JSON.parse(businessInfo);
    }
    return null;
}

function getShippingInfo() {
    const shippingInfo = localStorage.getItem('shippingInfo');
    if (shippingInfo) {
        return JSON.parse(shippingInfo);
    }
    return null;
}

function getPaymentInfo() {
    const paymentInfo = localStorage.getItem('paymentInfo');
    if (paymentInfo) {
        return JSON.parse(paymentInfo);
    }
    return null;
}

function getAdditionalInfo() {
    const additionalInfo = localStorage.getItem('additionalInfo');
    if (additionalInfo) {
        return JSON.parse(additionalInfo);
    }
    return null;
}
