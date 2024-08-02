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
                        <button type="submit" class="primary-btn">
                            <span class="desktop">Susisiekti</span>
                        <span class="mobile">
                            <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L10.5 10.5L2 19" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        </button>
                    </div>
                </div>
                <p class="error-msg"></p>
            </form>
        <?php endif; ?>
    </div>
</div>