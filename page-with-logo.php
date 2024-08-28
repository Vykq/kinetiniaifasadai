<?php
/*
 * Template name: Page with logo
 */

get_header();?>
<div class="page-header">
    <div class="content">
        <a href="<?php echo get_home_url(); ?>">
        <?php if(get_field('logo_video','main-settings')) : ?>
            <div class="logo-area mobile">
                <video class="logo-video" playsinline muted loop autoplay poster="<?php echo get_field('logo','main-settings'); ?>">
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
        <?php if(get_field('logo_video','main-settings')) : ?>
            <div class="logo-area desktop">
                <video class="logo-video" playsinline muted loop autoplay poster="<?php echo get_field('logo','main-settings'); ?>">
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
        </a>
    </div>
</div>
<?php the_content();
get_footer();