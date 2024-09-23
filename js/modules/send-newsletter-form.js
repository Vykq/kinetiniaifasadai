import checkName from "./check-name";
import checkEmail from "./check-email";
import checkPhone from "./check-phone";

const sendNewsletterForm = () =>{
    const html = document.querySelector('html');
    const form = document.querySelector('form.newsletter');
    const statusInfoBlock = form.querySelector('p.error-msg');
    const emailInput = form.querySelector('input[name="email"]');
    const checkAgree = form.querySelector('input[name="privacy"]');

    const message = {
        loading: themeUrl.loading,
        success: themeUrl.success,
        failure: themeUrl.failure
    };

    const clearInputs = () => {
        form.reset();
    };


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

    function emailValue() {
        if (checkEmail(emailInput, statusInfoBlock)) {
            return true;
        } else {
            return false;
        }
    }

    const validateForm = () => {
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

        postData(themeUrl.themeUrl + '/api/send-newsletter-form.php', formData)
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
                    html.classList.remove('modal-is-open');
                }, 5000);

            });
    });


}

export default sendNewsletterForm;