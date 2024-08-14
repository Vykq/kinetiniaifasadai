<div class="gallery-block">
    <div class="container">
        <div class="content">
            <?php if(get_field('title')): ?>
                <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
            <?php endif; ?>

            <?php if(get_field('subtitle')): ?>
                <p class="subtitle"><?php echo get_field('subtitle'); ?>
                    <?php if(get_field('more_text')) : ?>
                        <span class="tooltip" id="tippy-7-right">
                            <svg class="question" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#DBFF00"/>
                                <path d="M12.074 14.3384C12.074 14.5795 12.1878 14.7201 12.4155 14.7603L13.1989 14.9009V15.9454H8.29763V14.9009L9.08102 14.7603C9.30868 14.7201 9.4225 14.5795 9.4225 14.3384V9.37696C9.4225 9.13592 9.31537 8.99531 9.10111 8.95513L8.21729 8.77435V7.68966C8.73955 7.54235 9.32207 7.43522 9.96485 7.36826C10.6076 7.30131 11.1902 7.26783 11.7124 7.26783L12.074 7.58922V14.3384ZM12.0539 4.95783C12.0539 5.35957 11.92 5.68096 11.6522 5.922C11.3977 6.16305 11.0562 6.28357 10.6277 6.28357C10.1858 6.28357 9.83094 6.16305 9.56311 5.922C9.30868 5.68096 9.18146 5.35957 9.18146 4.95783C9.18146 4.55609 9.30868 4.24139 9.56311 4.01374C9.83094 3.7727 10.1858 3.65218 10.6277 3.65218C11.0562 3.65218 11.3977 3.7727 11.6522 4.01374C11.92 4.24139 12.0539 4.55609 12.0539 4.95783Z" fill="black"/>
                                </svg>
                                <svg class="hide" style="display: none" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="13" fill="#DBFF00"/>
                                <path d="M8 18L18 8M18 18L8 8" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
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