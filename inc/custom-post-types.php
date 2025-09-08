<?php
/**
 * Custom Post Types for Edenbrook Theme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Register News Articles Custom Post Type
function edenbrook_register_news_articles() {
    $labels = array(
        'name' => 'News Articles',
        'singular_name' => 'News Article',
        'menu_name' => 'News Articles',
        'add_new' => 'Add New Article',
        'add_new_item' => 'Add New News Article',
        'edit_item' => 'Edit News Article',
        'new_item' => 'New News Article',
        'view_item' => 'View News Article',
        'search_items' => 'Search News Articles',
        'not_found' => 'No news articles found',
        'not_found_in_trash' => 'No news articles found in trash'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'news-updates/article'),
        'capability_type' => 'post',
        'has_archive' => 'news-updates',
        'hierarchical' => false,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-media-document',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest' => true
    );

    register_post_type('news_article', $args);
}
add_action('init', 'edenbrook_register_news_articles');

// Register Services Custom Post Type
function edenbrook_register_services() {
    $labels = array(
        'name' => 'Services',
        'singular_name' => 'Service',
        'menu_name' => 'Services',
        'add_new' => 'Add New Service',
        'add_new_item' => 'Add New Service',
        'edit_item' => 'Edit Service',
        'new_item' => 'New Service',
        'view_item' => 'View Service',
        'search_items' => 'Search Services',
        'not_found' => 'No services found',
        'not_found_in_trash' => 'No services found in trash'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'services'),
        'capability_type' => 'post',
        'has_archive' => false,
        'hierarchical' => false,
        'menu_position' => 6,
        'menu_icon' => 'dashicons-businessman',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest' => true
    );

    register_post_type('service', $args);
}
add_action('init', 'edenbrook_register_services');

// Register News Categories Taxonomy
function edenbrook_register_news_categories() {
    $labels = array(
        'name' => 'News Categories',
        'singular_name' => 'News Category',
        'menu_name' => 'News Categories',
        'all_items' => 'All Categories',
        'edit_item' => 'Edit Category',
        'view_item' => 'View Category',
        'update_item' => 'Update Category',
        'add_new_item' => 'Add New Category',
        'new_item_name' => 'New Category Name',
        'search_items' => 'Search Categories',
        'not_found' => 'No categories found'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'hierarchical' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'news-category'),
        'show_in_rest' => true
    );

    register_taxonomy('news_category', array('news_article'), $args);
}
add_action('init', 'edenbrook_register_news_categories');

// Create default news articles from data
function edenbrook_create_default_news_articles() {
    // Only run once
    if (get_option('edenbrook_news_created')) {
        return;
    }

    $news_data = array(
        array(
            'title' => 'How AI is Revolutionizing PR Strategies: Edenbrook Media\'s 2024 Insights',
            'content' => 'Our team explores how artificial intelligence is transforming public relations practices, from automated media monitoring to AI-powered content creation and audience analysis.',
            'category' => 'PR & Communication',
            'featured_image' => 'ai-pr-trends.jpg',
            'read_time' => '5 min read'
        ),
        array(
            'title' => 'Digital PR Strategies That Drive Results: Our Proven Approach',
            'content' => 'Edenbrook Media shares cutting-edge digital PR strategies including influencer partnerships, data-driven storytelling, and integrated social media campaigns that deliver measurable results.',
            'category' => 'Digital PR',
            'featured_image' => 'digital-pr-storm.jpg',
            'read_time' => '4 min read'
        ),
        array(
            'title' => 'The Future of Corporate Communications: Edenbrook\'s 2025 Predictions',
            'content' => 'Our communications experts share insights on emerging trends including personalization, crisis management evolution, and the growing importance of brand authenticity in corporate messaging.',
            'category' => 'PR & Marketing',
            'featured_image' => 'pr-marketing-future.jpg',
            'read_time' => '6 min read'
        )
        // ... rest of news data would go here
    );

    foreach ($news_data as $article) {
        $post_id = wp_insert_post(array(
            'post_title' => $article['title'],
            'post_content' => $article['content'],
            'post_status' => 'publish',
            'post_type' => 'news_article',
            'meta_input' => array(
                'read_time' => $article['read_time'],
                'featured_image_name' => $article['featured_image']
            )
        ));

        // Set category
        wp_set_object_terms($post_id, $article['category'], 'news_category');
    }

    update_option('edenbrook_news_created', true);
}
add_action('after_switch_theme', 'edenbrook_create_default_news_articles');