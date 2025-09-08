<?php get_header(); ?>

<main class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <article class="max-w-4xl mx-auto">
                <header class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4"><?php the_title(); ?></h1>
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="mb-6">
                            <?php the_post_thumbnail('large', ['class' => 'w-full h-64 object-cover rounded-lg']); ?>
                        </div>
                    <?php endif; ?>
                </header>
                
                <div class="prose prose-lg max-w-none">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>