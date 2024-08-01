</main>
<footer>
    <div class="main-footer">
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <p class="footer-title">Kontaktai</p>

                    <div class="two-col">
                        <div class="info-block">
                            <p class="green-title">Dėl komercinių pasiūlymų</p>
                            <a href="mailto:<?php echo get_field('email','main-settings');?>"><?php echo get_field('email','main-settings');?></a>
                        </div>
                        <div class="info-block">
                            <p class="green-title">Sekite mus</p>
                            <a target="_blank" href="<?php echo get_field('linkedin','main-settings');?>">
                                <div class="icon">
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0001 18.7997V12.2072C18.0001 8.96719 17.3026 6.49219 13.5226 6.49219C11.7001 6.49219 10.4851 7.48219 9.99005 8.42719H9.94505V6.78469H6.36755V18.7997H10.1026V12.8372C10.1026 11.2622 10.3951 9.75469 12.3301 9.75469C14.2426 9.75469 14.2651 11.5322 14.2651 12.9272V18.7772H18.0001V18.7997Z" fill="white"/>
                                        <path d="M0.292603 6.78516H4.0276V18.8002H0.292603V6.78516Z" fill="white"/>
                                        <path d="M2.16 0.799805C0.9675 0.799805 0 1.7673 0 2.9598C0 4.1523 0.9675 5.1423 2.16 5.1423C3.3525 5.1423 4.32 4.1523 4.32 2.9598C4.32 1.7673 3.3525 0.799805 2.16 0.799805Z" fill="white"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="single-col">
                        <div class="info-block">
                            <p class="green-title">Pardavimai</p>
                            <a href="mailto:<?php echo get_field('email_pardavimai','main-settings');?>"><?php echo get_field('email_pardavimai','main-settings');?></a>
                        </div>
                    </div>

                </div>

                <p class="copyright-text">
                    © <?php echo date('Y'); ?> Kinetiniai fasadai
                </p>


            </div>
        </div>
        <div class="footer-img">
            <img src="<?php echo get_theme_file_uri() . '/assets/svg/footer.svg'; ?>" alt="footer ornament">
        </div>
    </div>
</footer>
<?php  wp_footer(); ?>
</body>
</html>