const showTooltip = () => {

    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip =>{
        const moreText = tooltip.previousElementSibling;
        const xSvg = tooltip.querySelector('svg.hide');
        const mainSvg = tooltip.querySelector('svg.question');
        tooltip.addEventListener('click', (e) => {
            moreText.classList.toggle('show');
            if(moreText.classList.contains('show')){
                xSvg.style.display = "inline-block";
                mainSvg.style.display = "none";
                if(tooltip.classList.contains('less-arrow')){
                    const arrow = tooltip.parentElement.parentElement.querySelector('.vertical');
                    arrow.classList.add('text-active');

                    const contentArea = tooltip.parentElement.parentElement;
                    contentArea.classList.add('width-fit');

                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');
                    mediaArea.classList.add('height-auto');

                    const step = tooltip.parentElement.parentElement.parentElement;
                    step.classList.add('margin-bottom');
                }

                if(tooltip.classList.contains('less-arrow-2')){
                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');
                    mediaArea.classList.add('height-auto');
                }


                if(tooltip.classList.contains('width-content')){
                    const content = tooltip.parentElement;
                    content.classList.add('width');
                }

            } else {
                xSvg.style.display = "none";
                mainSvg.style.display = "inline-block";
                if(tooltip.classList.contains('less-arrow')){
                    const arrow = tooltip.parentElement.parentElement.querySelector('.vertical');
                    arrow.classList.remove('text-active');

                    const contentArea = tooltip.parentElement.parentElement;
                    contentArea.classList.remove('width-fit');

                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');
                    mediaArea.classList.remove('height-auto');

                    const step = tooltip.parentElement.parentElement.parentElement;
                    step.classList.remove('margin-bottom');
                }

                if(tooltip.classList.contains('less-arrow-2')){
                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');
                    mediaArea.classList.remove('height-auto');
                }

                if(tooltip.classList.contains('width-content')){
                    const content = tooltip.parentElement;
                    content.classList.remove('width');
                }
            }

        })

    })

}

export default showTooltip;