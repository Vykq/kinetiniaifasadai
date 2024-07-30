<?php
include(dirname(__FILE__) . '/includes/default.php');
/**
 * Theme files
 */


//show_admin_bar(false);
//add_action( 'admin_enqueue_scripts', 'load_admin_styles' );
//function load_admin_styles() {
//    wp_enqueue_style( 'custom_admin_css', get_template_directory_uri() . '/custom-admin-css.css', false, '1.0.0' );
//}

function webpack_files() {
    wp_enqueue_script('webpack-js', get_theme_file_uri('assets/app.js'), array(), time(), true);
    wp_enqueue_style('webpack-styles', get_theme_file_uri('assets/style.css'), array(), time());
//    wp_enqueue_script('splide-js', get_theme_file_uri('assets/splide.min.js'), array(), '4.1.3', true);
//    wp_enqueue_style('splide-styles', get_theme_file_uri('assets/splide-core.min.css'), array(), '4.1.3');

    wp_localize_script( 'webpack-js', 'themeUrl',
        array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'themeUrl' => get_theme_file_uri(),
            'phone_empty' => __('Įveskite savo telefono numerį.','core'),
            'phone_error' => __('Klaidingai įvestas telefono numeris.','core'),
            'mail_empty' => __('Įveskite savo el. pašto adresą.','core'),
            'mail_error' => __('Klaidingai įvestas el. pašto adresas.','core'),
            'name_empty' => __('Įveskite savo vardą.','core'),
            'name_error' => __('Klaidingai įvestas Jūsų vardas.','core'),
            'loading' => __('Siunčiami duomenys...', 'core'),
            'success' => __('Jūsų užklausą gavome! Susisieksime su Jumis netrukus.', 'core'),
            'failure' => __('Kažkas negerai, prašome bandyti vėliau.', 'core'),
            'file_empty' => __('Pridėkite failą.', 'core'),
            'add_cv' => __('Pridėti CV', 'core'),
            'msg_empty' => __('Neįvesta žinutė.', 'core'),
            'file_added' => __('Failas pridėtas.', 'core'),
            'privacy_check' => __('Privaloma sutikti su privatumo politką.', 'core'),
            'no_service' => __('Pasirinkite dominančią paslaugą.', 'core'),
            'no_time' => __('Pasirinkite tinkamiausią laiką.', 'core'),
            'no_purpose' => __('Pasirinkite savo vizito tikslą.', 'core'),
            'no_clinic' => __('Pasirinkite savo norimą kliniką.', 'core'),
            'no_interest' => __('Pasirinkite kas jus domina.', 'core'),
            'password_mismatch_error' => __('Nesutampa slaptažodžiai.', 'core'),
            'no_pass' => __('Neįvedėte slaptažodžio.', 'core'),
            'empty_field' => __('Nesuvesti visi langeliai.', 'core'),
            'registering' => __('Registruojamas vartotojas.', 'core'),
            'enter_email' => __('Įveskite savo el. paštą arba vartotojo vardą.', 'core'),
            'enter_height_weight' => __('Įveskite savo ūgį ir svorį.', 'core'),
            'select_answer' => __('Pasirinkite savo atsakymą.', 'core'),


        )
    );

}
add_action('wp_enqueue_scripts', 'webpack_files');

if( function_exists('acf_add_options_page') ) {

    $parent = acf_add_options_page(array(
        'page_title' 	=> 'Puslapio nustatymai',
        'menu_title'	=> 'Puslapio nustatymai',
        'menu_slug' 	=> 'theme-general-settings',
        'capability'	=> 'edit_posts',
        'position'    => -1,
        'redirect'		=> false,
        'post_id' => 'main-settings',
    ));
}

/**
 * Theme support
 */
function theme_features() {
    load_theme_textdomain( 'fasadai', get_template_directory() . '/languages' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');

}

add_action('after_setup_theme', 'theme_features');

function theme_post_types()
{
    register_post_type('testimonial', array(
        'rewrite' => array('slug' => __('atsiliepimai', 'slug', 'degsis')),
        'has_archive' => false,
        'show_in_rest' => true,
        'public' => true,
        'menu_position' => -555,
        'labels' => array(
            'name' => 'Atsiliepimai',
            'add_new_item' => 'Pridėti atsiliepimą',
            'edit_item' => 'Koreguoti atsiliepimą',
            'all_items' => 'Visi atsiliepimai',
            'singular_name' => 'Atsiliepimas'
        ),
        'supports' => array(
            'title',
            'thumbnail'
        ),
        'menu_icon' => 'dashicons-smiley'
    ));

//    register_taxonomy('formatas', array('testimonial'), array(
//        'hierarchical' => true,
//        'labels' => array(
//            'name' => _x( 'Formatas', 'taxonomy general name', 'degsis' ),
//            'singular_name' => _x( 'Formatas', 'taxonomy singular name', 'degsis' ),
//            'search_items' =>  __( 'Ieškoti formato', 'degsis' ),
//            'all_items' => __( 'Visi formatai', 'degsis' ),
//            'edit_item' => __( 'Redaguoti formatą', 'degsis' ),
//            'update_item' => __( 'Atnaujinti formatą', 'degsis' ),
//            'add_new_item' => __( 'Pridėti naują formatą', 'degsis' ),
//            'menu_name' => __( 'Formatai', 'degsis' ),
//        ),
//        'show_ui' => true,
//        'show_admin_column' => true,
//        'query_var' => true,
//    ));
}

add_action('init', 'theme_post_types');

