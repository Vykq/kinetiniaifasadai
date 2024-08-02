import checkName from "./check-name";
import checkPhone from "./check-phone";
import checkEmail from "./check-email";


const sendConsultForm = () => {

    const html = document.querySelector('html');
    const modal = document.querySelector('.register-modal');

    const form = modal.querySelector('form.offer-form');
    const checkAgree = form.querySelector('input[name="privacy"]');
    const statusInfoBlock = form.querySelector('p.error-msg');

    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');

    const message = {
        loading: themeUrl.loading,
        success: themeUrl.success,
        failure: themeUrl.failure
    };

    const clearInputs = () => {
        form.reset();
    };

    nameInput.addEventListener('change', () => {
        if (nameInput.classList.contains('error')) {
            nameInput.classList.remove('error');
            statusInfoBlock.textContent = '';
            statusInfoBlock.classList.remove('field-error');
        }
    });

    phoneInput.addEventListener('change', () => {
        if (phoneInput.classList.contains('error')) {
            phoneInput.classList.remove('error');
            statusInfoBlock.classList.remove('field-error');
            statusInfoBlock.textContent = '';
        }
    });

    emailInput.addEventListener('change', () => {
        if (emailInput.classList.contains('error')) {
            emailInput.classList.remove('error');
            statusInfoBlock.classList.remove('field-error');
            statusInfoBlock.textContent = '';
        }
    });


    checkAgree.addEventListener('click', () => {
        if(checkAgree.parentElement.classList.contains('error')) {
            checkAgree.parentElement.classList.remove('error');
            statusInfoBlock.classList.remove('field-error');
            statusInfoBlock.textContent = '';
        }
    })

    function checkPolicy() {
        if(checkAgree.checked === false) {
            checkAgree.parentElement.classList.add('error');
            statusInfoBlock.textContent = themeUrl.privacy_check;
            return false;
        } else {
            return true;
        }
    }

    function nameValue() {
        if (checkName(nameInput, statusInfoBlock)) {
            return true;
        } else {
            return false;

        }
    }

    function emailValue() {
        if (checkEmail(emailInput, statusInfoBlock)) {
            return true;
        } else {
            return false;
        }
    }

    function phoneValue() {
        if (checkPhone(phoneInput, statusInfoBlock)) {
            return true;
        } else {
            return false;
        }
    }

    const validateForm = () => {
        if (!nameValue()) {
            return false;
        }

        if (!phoneValue()) {
            return false;
        }

        if (!emailValue()) {
            return false;
        }

        if(!checkPolicy()){
            return false;
        }

        return true;
    }


    const postData = async (url, data) => {
        statusInfoBlock.textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.text();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return false;
        }
        let formData = new FormData(form);

        postData(themeUrl.themeUrl + '/api/send-offer-form.php', formData)
            .then((res) => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'form_submission'
                });
                statusInfoBlock.textContent = message.success;
            })
            .catch(() => {
                statusInfoBlock.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusInfoBlock.textContent = '';
                    modal.classList.remove('show');
                    html.classList.remove('modal-is-open');
                }, 5000);

            });
    });


}

export default sendConsultForm;