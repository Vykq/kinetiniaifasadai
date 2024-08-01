<section class="main-hero-block">
    <div class="container">
        <?php if(get_field('logo_video','main-settings')) : ?>
            <div class="logo-area mobile">
                <video class="logo-video"playsinline muted loop autoplay poster="<?php echo get_field('logo','main-settings'); ?>">
                    <source src="<?php echo get_field('logo_video','main-settings'); ?>" type="video/mp4">
                </video>
            </div>
        <?php else: ?>
            <?php if(get_field('logo','main-settings')): ?>
                <div class="logo-area mobile">
                    <img src="<?php echo get_field('logo','main-settings'); ?>" alt="Kinetiniaifasadai.com logo">
                </div>
            <?php endif; ?>
        <?php endif; ?>
        <div class="wrapper">
            <div class="left">
                <?php if(get_field('logo_video','main-settings')) : ?>
                    <div class="logo-area desktop">
                        <video class="logo-video"playsinline muted loop autoplay poster="<?php echo get_field('logo','main-settings'); ?>">
                            <source src="<?php echo get_field('logo_video','main-settings'); ?>" type="video/mp4">
                        </video>
                    </div>
                <?php else: ?>
                    <?php if(get_field('logo','main-settings')): ?>
                        <div class="logo-area desktop">
                            <img src="<?php echo get_field('logo','main-settings'); ?>" alt="Kinetiniaifasadai.com logo">
                        </div>
                    <?php endif; ?>
                <?php endif; ?>

                <div class="content-area">
                    <?php if(get_field('title')): ?>
                        <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
                    <?php endif; ?>

                    <?php if(get_field('subtitle')): ?>
                        <p class="subtitle"><?php echo get_field('subtitle'); ?>
                        <?php if(get_field('more_text')) : ?>
                            <span class="tooltip" id="tippy-1-left">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#3D7FFF"/>
                                    <path d="M12.0741 14.3384C12.0741 14.5795 12.1879 14.7201 12.4156 14.7603L13.199 14.9009V15.9454H8.29776V14.9009L9.08115 14.7603C9.3088 14.7201 9.42262 14.5795 9.42262 14.3384V9.37696C9.42262 9.13592 9.31549 8.99531 9.10123 8.95513L8.21741 8.77435V7.68966C8.73967 7.54235 9.32219 7.43522 9.96497 7.36826C10.6078 7.30131 11.1903 7.26783 11.7125 7.26783L12.0741 7.58922V14.3384ZM12.054 4.95783C12.054 5.35957 11.9201 5.68096 11.6523 5.922C11.3978 6.16305 11.0564 6.28357 10.6278 6.28357C10.1859 6.28357 9.83106 6.16305 9.56323 5.922C9.3088 5.68096 9.18158 5.35957 9.18158 4.95783C9.18158 4.55609 9.3088 4.24139 9.56323 4.01374C9.83106 3.7727 10.1859 3.65218 10.6278 3.65218C11.0564 3.65218 11.3978 3.7727 11.6523 4.01374C11.9201 4.24139 12.054 4.55609 12.054 4.95783Z" fill="white"/>
                                </svg>
                            </span>
                        <?php endif; ?>
                        </p>
                    <?php endif; ?>

                    <?php if(get_field('button')): ?>
                        <?php echo get_template_part('components/button','',['title'=> get_field('button')['button_link']['title'], 'url' => get_field('button')['button_link']['url'], 'class' => get_field('button')['class'], 'open_modal' => get_field('button')['open_modal']]); ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="right">
                <?php if(get_field('video_mp4')): ?>
                    <div class="media-area">
                        <video class="video" playsinline muted loop autoplay poster="<?php echo (get_field('image')) ? get_field('image') : '';?>">
                            <source src="<?php echo get_field('video_mp4'); ?>" type="video/mp4">
                        </video>
                    </div>
                <?php else: ?>
                    <?php if(get_field('image')) : ?>
                        <div class="media-area">
                            <img src="<?php echo get_field('image'); ?>" alt="<?php echo strip_tags(get_field('title')['title_text']); ?>">
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<script>
    const tip1 = "<?php echo get_field('more_text'); ?>";
</script>