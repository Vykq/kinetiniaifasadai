<?php
get_header(); ?>
    <section class="error-page">
        <div class="container">
            <div class="content">
                <h1>
                    404 </br>PUSLAPIS NERASTAS.
                </h1>
                <p>
                    Atsiprašome, bet puslapis, kurio ieškote, nerastas arba neegzistuoja.
                </p>
                <a class="white-button" href="<?php echo esc_url(home_url()); ?>">
                    Atgal į titulinį
                </a>
            </div>
        </div>
    </section>
<?php
get_footer();