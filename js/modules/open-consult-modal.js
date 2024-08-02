
const openConsultModal = () => {

    const buttons = document.querySelectorAll('.open-consult-modal');
    const modal = document.querySelector('.register-modal');
    const closeBtn = modal.querySelector('.close-register-modal');
    const html = document.querySelector('html');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        })
    })

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    })

    function openModal() {
        modal.classList.add('show');
        html.classList.add('modal-is-open');
    }

    function closeModal() {
        modal.classList.remove('show');
        html.classList.remove('modal-is-open');
    }

    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });


    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('product-offer-modal')) {
            closeModal();
        }
    });

}

export default openConsultModal;