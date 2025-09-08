<?php
/**
 * Custom Fields for Edenbrook Theme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Add meta boxes for news articles
function edenbrook_add_news_meta_boxes() {
    add_meta_box(
        'news_article_details',
        'Article Details',
        'edenbrook_news_article_meta_box_callback',
        'news_article',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'edenbrook_add_news_meta_boxes');

// Meta box callback function
function edenbrook_news_article_meta_box_callback($post) {
    wp_nonce_field('edenbrook_news_meta_box', 'edenbrook_news_meta_box_nonce');
    
    $read_time = get_post_meta($post->ID, 'read_time', true);
    $author_name = get_post_meta($post->ID, 'author_name', true);
    $publication_date = get_post_meta($post->ID, 'publication_date', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="read_time">Read Time</label></th>
            <td><input type="text" id="read_time" name="read_time" value="<?php echo esc_attr($read_time); ?>" placeholder="5 min read" /></td>
        </tr>
        <tr>
            <th><label for="author_name">Author Name</label></th>
            <td><input type="text" id="author_name" name="author_name" value="<?php echo esc_attr($author_name); ?>" placeholder="Author Name" /></td>
        </tr>
        <tr>
            <th><label for="publication_date">Publication Date</label></th>
            <td><input type="date" id="publication_date" name="publication_date" value="<?php echo esc_attr($publication_date); ?>" /></td>
        </tr>
    </table>
    <?php
}

// Save meta box data
function edenbrook_save_news_meta_box_data($post_id) {
    if (!isset($_POST['edenbrook_news_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['edenbrook_news_meta_box_nonce'], 'edenbrook_news_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['post_type']) && 'news_article' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id)) {
            return;
        }
    } else {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
    }
    
    if (isset($_POST['read_time'])) {
        update_post_meta($post_id, 'read_time', sanitize_text_field($_POST['read_time']));
    }
    
    if (isset($_POST['author_name'])) {
        update_post_meta($post_id, 'author_name', sanitize_text_field($_POST['author_name']));
    }
    
    if (isset($_POST['publication_date'])) {
        update_post_meta($post_id, 'publication_date', sanitize_text_field($_POST['publication_date']));
    }
}
add_action('save_post', 'edenbrook_save_news_meta_box_data');

// Add meta boxes for services
function edenbrook_add_service_meta_boxes() {
    add_meta_box(
        'service_details',
        'Service Details',
        'edenbrook_service_meta_box_callback',
        'service',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'edenbrook_add_service_meta_boxes');

// Service meta box callback
function edenbrook_service_meta_box_callback($post) {
    wp_nonce_field('edenbrook_service_meta_box', 'edenbrook_service_meta_box_nonce');
    
    $service_icon = get_post_meta($post->ID, 'service_icon', true);
    $service_features = get_post_meta($post->ID, 'service_features', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="service_icon">Service Icon</label></th>
            <td><input type="text" id="service_icon" name="service_icon" value="<?php echo esc_attr($service_icon); ?>" placeholder="Icon class name" /></td>
        </tr>
        <tr>
            <th><label for="service_features">Service Features (one per line)</label></th>
            <td><textarea id="service_features" name="service_features" rows="5" cols="50"><?php echo esc_textarea($service_features); ?></textarea></td>
        </tr>
    </table>
    <?php
}

// Save service meta box data
function edenbrook_save_service_meta_box_data($post_id) {
    if (!isset($_POST['edenbrook_service_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['edenbrook_service_meta_box_nonce'], 'edenbrook_service_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['post_type']) && 'service' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id)) {
            return;
        }
    } else {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
    }
    
    if (isset($_POST['service_icon'])) {
        update_post_meta($post_id, 'service_icon', sanitize_text_field($_POST['service_icon']));
    }
    
    if (isset($_POST['service_features'])) {
        update_post_meta($post_id, 'service_features', sanitize_textarea_field($_POST['service_features']));
    }
}
add_action('save_post', 'edenbrook_save_service_meta_box_data');