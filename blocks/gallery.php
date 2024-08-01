<div class="gallery-block">
    <div class="container">
        <div class="content">
            <?php if(get_field('title')): ?>
                <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
            <?php endif; ?>

            <?php if(get_field('subtitle')): ?>
                <p class="subtitle"><?php echo get_field('subtitle'); ?>
                    <?php if(get_field('more_text')) : ?>
                        <span class="tooltip" id="tippy-6-right">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#3D7FFF"/>
                                <path d="M12.0741 14.3384C12.0741 14.5795 12.1879 14.7201 12.4156 14.7603L13.199 14.9009V15.9454H8.29776V14.9009L9.08115 14.7603C9.3088 14.7201 9.42262 14.5795 9.42262 14.3384V9.37696C9.42262 9.13592 9.31549 8.99531 9.10123 8.95513L8.21741 8.77435V7.68966C8.73967 7.54235 9.32219 7.43522 9.96497 7.36826C10.6078 7.30131 11.1903 7.26783 11.7125 7.26783L12.0741 7.58922V14.3384ZM12.054 4.95783C12.054 5.35957 11.9201 5.68096 11.6523 5.922C11.3978 6.16305 11.0564 6.28357 10.6278 6.28357C10.1859 6.28357 9.83106 6.16305 9.56323 5.922C9.3088 5.68096 9.18158 5.35957 9.18158 4.95783C9.18158 4.55609 9.3088 4.24139 9.56323 4.01374C9.83106 3.7727 10.1859 3.65218 10.6278 3.65218C11.0564 3.65218 11.3978 3.7727 11.6523 4.01374C11.9201 4.24139 12.054 4.55609 12.054 4.95783Z" fill="white"/>
                            </svg>
                        </span>
                    <?php endif; ?>
                </p>
            <?php endif; ?>
        </div>

        <?php $gallery = get_field('gallery'); ?>
        <div class="gallery-slider-wrapper">
            <div class="left">
                <div class="splide gallery-slider" role="group" aria-label="Galerija">
                <div class="splide__track">
                    <ul class="splide__list">
                        <?php foreach ($gallery as $url) : ?>
                            <li class="splide__slide">
                               <div class="image-area">
                                   <img src="<?php echo $url; ?>" alt="Galerijos nuotrauka">
                               </div>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            </div>
            <div class="right">

            </div>
        </div>
        <div class="ornaments">
            <div class="line vertical"></div>
            <div class="line horizontal"></div>
            <div class="line vertical-2"></div>
            <div class="line horizontal-2"></div>
            <div class="dot"></div>
        </div>

    </div>
</div>

<script>
    const tip7 = "<?php echo get_field('more_text'); ?>";

</script>