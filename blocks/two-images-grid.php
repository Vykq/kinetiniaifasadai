<div class="two-images-grid">
    <div class="container">
        <div class="content">
            <?php if(get_field('title')): ?>
                <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
            <?php endif; ?>

            <?php if(get_field('subtitle')): ?>
                <p class="subtitle"><?php echo get_field('subtitle'); ?>
                    <?php if(get_field('more_text')) : ?>
                        <span class="more-text"><?php echo get_field('more_text'); ?></span>
                        <span class="tooltip width-content" id="tippy-6-right">
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
        <div class="wrapper">
            <div class="left">
                <?php if(get_field('video_mp4')) : ?>
                    <div class="media-area">
                        <video class="video video-inline" playsinline muted loop poster="<?php echo get_field('image'); ?>">
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
                    <?php if(get_field('image')): ?>
                        <div class="media-area">
                            <img src="<?php echo get_field('image'); ?>" alt="<?php echo strip_tags(get_field('title')['title_text']); ?>">
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
            <div class="right">
                <?php if(get_field('video_mp4_2')) : ?>
                    <div class="media-area">
                        <video class="video video-inline" playsinline muted loop poster="<?php echo get_field('image_2'); ?>">
                            <source src="<?php echo get_field('video_mp4_2'); ?>" type="video/mp4">
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
                            <img src="<?php echo get_field('image_2'); ?>" alt="<?php echo strip_tags(get_field('title')['title_text']); ?>">
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
        <?php if(get_field('show_divider_after_block')): ?>
            <div class="divider">
                <div class="line"></div>
                <div class="dot"></div>
            </div>
        <?php endif; ?>
    </div>
</div>