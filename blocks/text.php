<div class="text-block">
    <div class="container">
        <div class="content">
            <?php if(get_field('title')): ?>
                <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
            <?php endif; ?>
            <?php if(get_field('content')): ?>
                <div class="text">
                    <?php echo get_field('content'); ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>