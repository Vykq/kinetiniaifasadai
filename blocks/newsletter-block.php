<div class="newsletter-form">
    <div class="container">
        <div class="content">
            <?php if(get_field('title')): ?>
                <?php echo get_template_part('components/title','',['title' => get_field('title')['title_text'], 'type' => get_field('title')['type']]); ?>
            <?php endif; ?>

            <?php if(get_field('subtitle')): ?>
                <p class="subtitle"><?php echo get_field('subtitle'); ?></p>
            <?php endif; ?>
        </div>

        <?php if(get_field('show_newsletter_form')): ?>
            <form class="newsletter">
                <div class="input">
                    <div class="single-input">
                        <input type="text" name="email" placeholder="El. Paštas" />
                    </div>
                    <div class="button-area">
                        <button type="submit" class="primary-btn">Susisiekti</button>
                    </div>
                </div>
                <p class="error-msg"></p>
            </form>
        <?php endif; ?>
    </div>
</div>