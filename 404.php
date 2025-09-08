<?php get_header(); ?>

<main class="min-h-screen py-20 flex items-center justify-center">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-md mx-auto">
            <h1 class="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p class="text-gray-600 mb-8">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <div class="space-x-4">
                <a href="<?php echo home_url(); ?>" 
                   class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Go Home
                </a>
                <a href="javascript:history.back()" 
                   class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Go Back
                </a>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>