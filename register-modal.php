<div class="register-modal modal">
    <div class="register-block block">
        <div class="close-register-modal close-modal" tabindex="0">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5859 2L2.26163 20.3243" stroke="black" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 2L20.3243 20.3243" stroke="black" stroke-width="4" stroke-linecap="round"/>
            </svg>
        </div>
        <p class="modal-title"><?php echo get_field('registracija','main-settings')['title']; ?></p>
        <p class="modal-subtitle">
            <?php echo get_field('registracija','main-settings')['subtitle']; ?>
        </p>
        <form class="offer-form form">
            <div class="rows">
                <div class="col">
                    <input type="text" name="name" placeholder="<?php _e('Vardas Pavardė','degsis'); ?>" />
                </div>
                <div class="col">
                    <input type="text" name="phone" placeholder="<?php _e('Telefono numeris','degsis'); ?>" />
                </div>
                <div class="col">
                    <input type="text" name="email" placeholder="<?php _e('El. paštas','degsis'); ?>" />
                </div>
            </div>
            <div class="col-2">
            <div class="checks">
                <div class="radio-wrapper">
                    <label for="privacy" class="privacy-label">
                        <input type="radio" name="privacy" id="privacy"> <?php echo get_field('registracija','main-settings')['privatumo_politikos_tekstas']; ?>
                    </label>
                </div>
            </div>

            <div class="button-area">
                <button type="submit" class="button-primary send-offer-form"><?php echo get_field('registracija','main-settings')['mygtuko_tekstas']; ?></button>

            </div>
            </div>
            <div class="error-area">
                <p class="error-msg"></p>
            </div>
        </form>
    </div>
</div>
