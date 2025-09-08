<?php get_header(); ?>

<main class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <?php if (have_posts()) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="h-48 overflow-hidden">
                                <?php the_post_thumbnail('medium', ['class' => 'w-full h-full object-cover']); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            <h2 class="text-xl font-semibold text-gray-900 mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition-colors duration-200">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="text-sm text-gray-500 mb-3">
                                <?php echo get_the_date(); ?>
                            </div>
                            
                            <div class="text-gray-600 mb-4">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="text-blue-600 hover:text-blue-800 font-semibold">
                                Read More →
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <!-- Pagination -->
            <div class="mt-12 text-center">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '← Previous',
                    'next_text' => 'Next →',
                    'class' => 'pagination'
                ));
                ?>
            </div>
        <?php else : ?>
            <div class="text-center py-20">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">No posts found</h1>
                <p class="text-gray-600">There are currently no posts available.</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>