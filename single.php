<?php get_header(); ?>

<main class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <article class="max-w-4xl mx-auto">
                <header class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4"><?php the_title(); ?></h1>
                    
                    <div class="flex items-center text-sm text-gray-500 mb-6">
                        <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                        <?php
                        $read_time = get_post_meta(get_the_ID(), 'read_time', true);
                        if ($read_time) :
                        ?>
                            <span class="mx-2">•</span>
                            <span><?php echo $read_time; ?></span>
                        <?php endif; ?>
                        
                        <?php
                        $author_name = get_post_meta(get_the_ID(), 'author_name', true);
                        if ($author_name) :
                        ?>
                            <span class="mx-2">•</span>
                            <span>By <?php echo $author_name; ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="mb-8">
                            <?php the_post_thumbnail('large', ['class' => 'w-full h-64 object-cover rounded-lg']); ?>
                        </div>
                    <?php endif; ?>
                </header>
                
                <div class="prose prose-lg max-w-none">
                    <?php the_content(); ?>
                </div>
                
                <footer class="mt-12 pt-8 border-t border-gray-200">
                    <div class="flex flex-wrap gap-2 mb-6">
                        <?php
                        $terms = get_the_terms(get_the_ID(), 'news_category');
                        if ($terms && !is_wp_error($terms)) :
                            foreach ($terms as $term) :
                        ?>
                            <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                <?php echo $term->name; ?>
                            </span>
                        <?php 
                            endforeach;
                        endif; 
                        ?>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                        <p class="text-gray-600 mb-4">
                            Contact Edenbrook Media International today to discuss how we can help 
                            elevate your brand and achieve your communication goals.
                        </p>
                        <a href="<?php echo home_url('#contact'); ?>" 
                           class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                            Contact Us
                        </a>
                    </div>
                </footer>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>