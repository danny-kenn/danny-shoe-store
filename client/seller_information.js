document.addEventListener('DOMContentLoaded', function() {
    loadBusinessInfo();
});

function loadBusinessInfo() {
    const businessInfo = JSON.parse(localStorage.getItem('businessInfo')) || {};
    document.getElementById('businessName').value = businessInfo.businessName || '';
    document.getElementById('businessType').value = businessInfo.businessType || '';
    document.getElementById('registrationNumber').value = businessInfo.registrationNumber || '';
}

function enableEditing() {
    const inputs = document.querySelectorAll('#businessInfoForm input');
    inputs.forEach(input => input.disabled = false);
    document.getElementById('submitButton').hidden = false;
    document.getElementById('editButton').hidden = true;
}

document.getElementById('businessInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const businessInfo = {
        businessName: document.getElementById('businessName').value,
        businessType: document.getElementById('businessType').value,
        registrationNumber: document.getElementById('registrationNumber').value,
    };
    localStorage.setItem('businessInfo', JSON.stringify(businessInfo));
    disableEditing();
    updateButtonStatus('businessInfoButton', true);
    window.location.href = 'seller_homepage.html';
});

function disableEditing() {
    const inputs = document.querySelectorAll('#businessInfoForm input');
    inputs.forEach(input => input.disabled = true);
    document.getElementById('submitButton').hidden = true;
    document.getElementById('editButton').hidden = false;
}

function updateButtonStatus(buttonId, isComplete) {
    const button = document.getElementById(buttonId);
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
// Update this function with your actual check logic for business information completeness
function checkBusinessInfo() {
    const businessInfo = JSON.parse(localStorage.getItem('businessInfo')) || {};
    return businessInfo.businessName && businessInfo.businessType && businessInfo.registrationNumber;
}
