<?php
/**
 * Edenbrook Media Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function edenbrook_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'edenbrook'),
        'footer' => __('Footer Menu', 'edenbrook'),
    ));
}
add_action('after_setup_theme', 'edenbrook_theme_setup');

// Enqueue styles and scripts
function edenbrook_enqueue_scripts() {
    wp_enqueue_style('edenbrook-style', get_stylesheet_uri(), array(), '1.0');
    wp_enqueue_style('edenbrook-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0');
    
    wp_enqueue_script('edenbrook-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);
    
    // Localize script for AJAX
    wp_localize_script('edenbrook-main', 'edenbrook_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('edenbrook_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'edenbrook_enqueue_scripts');

// Custom post types
require_once get_template_directory() . '/inc/custom-post-types.php';
require_once get_template_directory() . '/inc/custom-fields.php';

// Services data function
function get_services_data() {
    return array(
        'PR & Marketing Consultancy' => array(
            'slug' => 'pr-marketing-consultancy',
            'description' => 'In PR and Marketing Consultancy, we are advocates of integrated marketing communications here at Edenbrook Media International.',
            'image' => get_template_directory_uri() . '/assets/service-pr-marketing.jpg'
        ),
        'Creative Design & Branding' => array(
            'slug' => 'creative-design-branding',
            'description' => 'How can we help you put your business in the forefront in this increasingly competitive market?',
            'image' => get_template_directory_uri() . '/assets/service-creative-design.jpg'
        ),
        'Event Management & Planning' => array(
            'slug' => 'event-management-planning',
            'description' => 'Any event management company can help you choose linens, organize catering or find a hotel for your event.',
            'image' => get_template_directory_uri() . '/assets/service-event-management.jpg'
        ),
        'Publishing & Printing' => array(
            'slug' => 'publishing-printing',
            'description' => 'We have specialized in publishing quality design and print works including magazines, books, brochures.',
            'image' => get_template_directory_uri() . '/assets/service-publishing.jpg'
        ),
        'Web Design & Development' => array(
            'slug' => 'web-design-development',
            'description' => 'Edenbrook Media International is offering a broad range of web services ranging from web site design and site re-design.',
            'image' => get_template_directory_uri() . '/assets/service-web-development.jpg'
        ),
        'Business & Strategic Plans' => array(
            'slug' => 'business-strategic-plans',
            'description' => 'On the Strategic Plan front, our strategic planners have years of experience engaging clients.',
            'image' => get_template_directory_uri() . '/assets/service-business-planning.jpg'
        ),
        'Multimedia Production' => array(
            'slug' => 'multimedia-production',
            'description' => 'Edenbrook Media International is also an Audio Visual company providing services to the events and marketing industry.',
            'image' => get_template_directory_uri() . '/assets/service-multimedia.jpg'
        ),
        'Capacity Building & Training' => array(
            'slug' => 'capacity-building-training',
            'description' => 'Edenbrook Media International also offers high quality training programs.',
            'image' => get_template_directory_uri() . '/assets/service-training.jpg'
        )
    );
}

// Widget areas
function edenbrook_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'edenbrook'),
        'id' => 'footer-widgets',
        'description' => __('Widgets for the footer area', 'edenbrook'),
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'edenbrook_widgets_init');

// Custom page templates
function edenbrook_page_templates($templates) {
    $templates['page-services.php'] = 'Services Template';
    $templates['page-news-updates.php'] = 'News Updates Template';
    $templates['page-generate-images.php'] = 'Image Generator Template';
    return $templates;
}
add_filter('theme_page_templates', 'edenbrook_page_templates');

// AJAX handler for contact form
function edenbrook_handle_contact_form() {
    check_ajax_referer('edenbrook_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Handle form submission (send email, save to database, etc.)
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_send_json_success('Message sent successfully!');
    } else {
        wp_send_json_error('Failed to send message.');
    }
}
add_action('wp_ajax_edenbrook_contact', 'edenbrook_handle_contact_form');
add_action('wp_ajax_nopriv_edenbrook_contact', 'edenbrook_handle_contact_form');