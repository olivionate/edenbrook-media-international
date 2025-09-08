<?php get_header(); ?>

<main class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest insights, trends, and updates from Edenbrook Media International.
            </p>
        </header>

        <!-- Category Filter -->
        <div class="mb-8">
            <div class="flex flex-wrap gap-2 justify-center">
                <button class="category-filter active bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium" 
                        data-category="all">
                    All Categories
                </button>
                <?php
                $categories = get_terms(array(
                    'taxonomy' => 'news_category',
                    'hide_empty' => false,
                ));
                
                if ($categories && !is_wp_error($categories)) :
                    foreach ($categories as $category) :
                ?>
                    <button class="category-filter bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium" 
                            data-category="<?php echo $category->slug; ?>">
                        <?php echo $category->name; ?>
                    </button>
                <?php 
                    endforeach;
                endif;
                ?>
            </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
            <?php
            $news_query = new WP_Query(array(
                'post_type' => 'news_article',
                'posts_per_page' => -1,
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC'
            ));

            if ($news_query->have_posts()) :
                while ($news_query->have_posts()) : $news_query->the_post();
                    $categories = get_the_terms(get_the_ID(), 'news_category');
                    $category_slugs = array();
                    if ($categories && !is_wp_error($categories)) {
                        foreach ($categories as $cat) {
                            $category_slugs[] = $cat->slug;
                        }
                    }
                    $read_time = get_post_meta(get_the_ID(), 'read_time', true);
            ?>
                <article class="news-article bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" 
                         data-categories="<?php echo implode(',', $category_slugs); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="h-48 overflow-hidden">
                            <?php the_post_thumbnail('medium', ['class' => 'w-full h-full object-cover']); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="p-6">
                        <?php if ($categories && !is_wp_error($categories)) : ?>
                            <div class="mb-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    <?php echo $categories[0]->name; ?>
                                </span>
                            </div>
                        <?php endif; ?>
                        
                        <h2 class="text-xl font-semibold text-gray-900 mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition-colors duration-200">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <p class="text-gray-600 mb-4">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </p>
                        
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-500">
                                <?php echo get_the_date('M j, Y'); ?>
                                <?php if ($read_time) : ?>
                                    • <?php echo $read_time; ?>
                                <?php endif; ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" 
                               class="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                                Read Full Article →
                            </a>
                        </div>
                    </div>
                </article>
            <?php 
                endwhile;
                wp_reset_postdata();
            else :
            ?>
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-600">No news articles found.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const articles = document.querySelectorAll('.news-article');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            this.classList.add('active', 'bg-blue-600', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Filter articles
            articles.forEach(article => {
                if (category === 'all') {
                    article.style.display = 'block';
                } else {
                    const articleCategories = article.getAttribute('data-categories');
                    if (articleCategories && articleCategories.includes(category)) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                }
            });
        });
    });
});
</script>

<?php get_footer(); ?>