<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="<?php echo home_url(); ?>" class="flex items-center space-x-2">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">E</span>
                        </div>
                        <span class="font-bold text-xl text-gray-900"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
                <a href="<?php echo home_url(); ?>" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="<?php echo home_url('#about'); ?>" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="<?php echo home_url('#services'); ?>" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
                <a href="<?php echo get_permalink(get_page_by_path('news-updates')); ?>" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">News</a>
                <a href="<?php echo home_url('#contact'); ?>" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </nav>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button type="button" class="text-gray-700 hover:text-blue-600" id="mobile-menu-button">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <a href="<?php echo home_url(); ?>" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="<?php echo home_url('#about'); ?>" class="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="<?php echo home_url('#services'); ?>" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                <a href="<?php echo get_permalink(get_page_by_path('news-updates')); ?>" class="block px-3 py-2 text-gray-700 hover:text-blue-600">News</a>
                <a href="<?php echo home_url('#contact'); ?>" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
        </div>
    </div>
</header>