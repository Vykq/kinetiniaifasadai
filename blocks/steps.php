<div class="steps-block">
    <div class="container">
        <div class="step first">
                <?php if(get_field('video_mp4')) : ?>
                    <div class="media-area">
                        <video class="video video-inline" playsinline muted loop poster="<?php echo get_field('image_1'); ?>">
                            <source src="<?php echo get_field('video_mp4'); ?>" type="video/mp4">
                        </video>
                        <button class="play-video-inline" name="Play video" aria-label="Play video">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50" fill="white"/>
                                <path d="M57 47.7679C58.3333 48.5377 58.3333 50.4623 57 51.2321L45.75 57.7272C44.4167 58.497 42.75 57.5348 42.75 55.9952L42.75 43.0048C42.75 41.4652 44.4167 40.503 45.75 41.2728L57 47.7679Z" fill="black"/>
                            </svg>
                        </button>

                    </div>
                <?php else: ?>
                    <?php if(get_field('image_1')): ?>
                        <div class="media-area">
                            <img src="<?php echo get_field('image_1'); ?>" alt="<?php echo strip_tags(get_field('title_1')['title_text']); ?>">
                        </div>
                    <?php endif; ?>
                <?php endif; ?>

            <div class="content-area">
                <?php if(get_field('title_1')): ?>
                    <?php echo get_template_part('components/title','',['title' => get_field('title_1')['title_text'], 'type' => get_field('title_1')['type']]); ?>
                <?php endif; ?>

                <?php if(get_field('subtitle_1')): ?>
                    <p class="subtitle"><?php echo get_field('subtitle_1'); ?>
                        <?php if(get_field('more_text_1')) : ?>
                        <span class="more-text"><?php echo get_field('more_text_1'); ?></span>
                            <span class="tooltip less-arrow" id="tippy-2-right">
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

                <div class="line vertical"></div>
                <div class="line horizontal"></div>
                <div class="dot"></div>
            </div>

        </div>
        <div class="step second">
            <div class="elements">
                <div class="line vertical"></div>
                <div class="line horizontal"></div>
                <div class="dot"></div>
            </div>
            <div class="content-area">
                <?php if(get_field('title_2')): ?>
                    <?php echo get_template_part('components/title','',['title' => get_field('title_2')['title_text'], 'type' => get_field('title_2')['type']]); ?>
                <?php endif; ?>

                <?php if(get_field('subtitle_2')): ?>
                    <p class="subtitle"><?php echo get_field('subtitle_2'); ?>
                        <?php if(get_field('more_text_2')) : ?>
                            <span class="more-text"><?php echo get_field('more_text_2'); ?></span>
                            <span class="tooltip less-arrow-2" id="tippy-3-bottom">
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

            <?php if(get_field('video_mp4_copy')) : ?>
                <div class="media-area">
                    <video class="video video-inline" playsinline muted loop poster="<?php echo get_field('image_2'); ?>">
                        <source src="<?php echo get_field('video_mp4_copy'); ?>" type="video/mp4">
                    </video>
                    <button class="play-video-inline" name="Play video" aria-label="Play video">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="white"/>
                            <path d="M57 47.7679C58.3333 48.5377 58.3333 50.4623 57 51.2321L45.75 57.7272C44.4167 58.497 42.75 57.5348 42.75 55.9952L42.75 43.0048C42.75 41.4652 44.4167 40.503 45.75 41.2728L57 47.7679Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            <?php else: ?>
                <?php if(get_field('image_2')): ?>
                    <div class="media-area">
                        <img src="<?php echo get_field('image_2'); ?>" alt="<?php echo strip_tags(get_field('title_2')['title_text']); ?>">
                    </div>
                <?php endif; ?>
            <?php endif; ?>
            <div class="elements-2">
                <div class="line vertical-2"></div>
                <div class="line horizontal-2"></div>
            </div>
        </div>
    </div>
</div>

<div class="steps-block no-margin">
    <div class="container no-margin">
        <div class="step third">
            <div id="lottie"></div>
<!--            <div class="slider-pile">-->
<!--                <video class="observer-video" playsinline muted loop autoplay>-->
<!--                    <source type="video/mp4" src="--><?php //echo get_theme_file_uri() . '/assets/video/piles.mp4'; ?><!--">-->
<!--                </video>-->
<!--            </div>-->
        </div>
    </div>
</div>

<div class="steps-block up">
    <div class="container">
        <div class="step fourth">
            <div class="ornament">
                <div class="line vertical"></div>
                <div class="line horizontal"></div>
                <div class="line vertical-2"></div>
                <div class="dot"></div>
            </div>
            <div class="content-area">
                <?php if(get_field('title_4')): ?>
                    <?php echo get_template_part('components/title','',['title' => get_field('title_4')['title_text'], 'type' => get_field('title_4')['type']]); ?>
                <?php endif; ?>

                <?php if(get_field('subtitle_4')): ?>
                    <p class="subtitle"><?php echo get_field('subtitle_4'); ?>
                        <?php if(get_field('more_text_4')) : ?>
                            <span class="more-text"><?php echo get_field('more_text_4'); ?></span>
                            <span class="tooltip" id="tippy-4-bottom">
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

                <?php if(have_rows('examples')) : ?>
                    <div class="examples-wrapper">
                        <?php while(have_rows('examples')) : the_row(); ?>
                             <div class="single-example">
                                 <?php if(get_sub_field('photo')): ?>
                                    <div class="example-photo">
                                        <img src="<?php echo get_sub_field('photo'); ?>" alt="<?php echo get_sub_field('title'); ?>">
                                    </div>
                                 <?php endif; ?>
                                 <p class="title"><?php echo get_sub_field('title'); ?></p>
                                 <p class="matmenys"><?php echo get_sub_field('matmenys'); ?></p>
                             </div>
                        <?php endwhile;?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>



<script>


</script>