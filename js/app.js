const degreeTypeSelect = document.getElementById('degree_type');
const undergradForm = document.getElementById('undergraduate-form');
const postgradForm = document.getElementById('postgraduate-form');
const undergradSubmitBtn = document.getElementById('undergrad-submit-btn');
const postgradSubmitBtn = document.getElementById('postgrad-submit-btn');


function storeFormData(formData) {
    localStorage.setItem('formData', JSON.stringify(formData));
}


function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    storeFormData(formDataObject);
    window.location.href = 'success.html'; 
}

degreeTypeSelect.addEventListener('change', function () {
    if (degreeTypeSelect.value === 'undergraduate') {
        undergradForm.style.display = 'block';
        postgradForm.style.display = 'none';
        undergradSubmitBtn.style.display = 'block';
        postgradSubmitBtn.style.display = 'none';
    } else if (degreeTypeSelect.value === 'postgraduate') {
        undergradForm.style.display = 'none';
        postgradForm.style.display = 'block';
        undergradSubmitBtn.style.display = 'none';
        postgradSubmitBtn.style.display = 'block';
    } else {
        undergradForm.style.display = 'none';
        postgradForm.style.display = 'none';
        undergradSubmitBtn.style.display = 'none';
        postgradSubmitBtn.style.display = 'none';
    }
});


undergradForm.addEventListener('submit', handleSubmit);
postgradForm.addEventListener('submit', handleSubmit);