const showTooltip = () => {

    const tooltipBtns = document.querySelectorAll('.tooltip');
    const tooltips = document.querySelectorAll('.tooltip-text');

    tooltipBtns.forEach((btn, index) => {
        btn.addEventListener('mouseenter', () => {
            tooltips[index].classList.add('show');
        });
    })

    tooltipBtns.forEach((btn, index) => {
        btn.addEventListener('mouseleave', () => {
            tooltips[index].classList.remove('show');
        });
    })
}

export default showTooltip;