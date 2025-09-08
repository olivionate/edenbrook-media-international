<?php get_header(); ?>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <div class="hero-bg-slider">
            <div class="hero-slide active" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/hero-bg-1.jpg')"></div>
            <div class="hero-slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/hero-bg-2.jpg')"></div>
            <div class="hero-slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/hero-bg-3.jpg')"></div>
        </div>
        <div class="absolute inset-0 bg-black/60"></div>
    </div>
    
    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Elevating Your Brand Through 
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Communication
            </span>
        </h1>
        <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Edenbrook Media International delivers comprehensive PR, marketing, design, and multimedia 
            solutions that transform your vision into compelling stories that resonate with your audience.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Our Services
            </a>
            <a href="#contact" class="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get In Touch
            </a>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Edenbrook Media</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a leading media and communications company committed to delivering excellence 
                in every project we undertake.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Vision -->
            <div class="text-center">
                <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/about-vision.jpg" 
                         alt="Our Vision" class="w-full h-40 object-cover rounded-lg mb-4">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p class="text-gray-600">
                        To be the leading media company that transforms businesses through innovative 
                        communication strategies.
                    </p>
                </div>
            </div>
            
            <!-- Mission -->
            <div class="text-center">
                <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/about-mission.jpg" 
                         alt="Our Mission" class="w-full h-40 object-cover rounded-lg mb-4">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p class="text-gray-600">
                        We provide comprehensive media services that elevate brands and create 
                        meaningful connections with target audiences.
                    </p>
                </div>
            </div>
            
            <!-- Values -->
            <div class="text-center">
                <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/about-values-ai.jpg" 
                         alt="Our Values" class="w-full h-40 object-cover rounded-lg mb-4">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                    <p class="text-gray-600">
                        Integrity, innovation, excellence, and client satisfaction guide everything 
                        we do at Edenbrook Media.
                    </p>
                </div>
            </div>
            
            <!-- Team -->
            <div class="text-center">
                <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/about-team.jpg" 
                         alt="Our Team" class="w-full h-40 object-cover rounded-lg mb-4">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
                    <p class="text-gray-600">
                        Experienced professionals dedicated to delivering exceptional results 
                        for every client project.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive media and communication solutions tailored to your business needs.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <?php
            $services = get_services_data();
            foreach ($services as $service_name => $service_data) :
            ?>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="<?php echo $service_data['image']; ?>" 
                     alt="<?php echo esc_attr($service_name); ?>" 
                     class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2"><?php echo $service_name; ?></h3>
                    <p class="text-gray-600 mb-4"><?php echo $service_data['description']; ?></p>
                    <a href="<?php echo home_url('services/' . $service_data['slug']); ?>" 
                       class="text-blue-600 hover:text-blue-800 font-semibold">
                        Learn More →
                    </a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to elevate your brand? Let's discuss how we can help you achieve your goals.
            </p>
        </div>
        
        <div class="max-w-2xl mx-auto">
            <form id="contact-form" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required
                               class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                               class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" required
                              class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" 
                            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<?php get_footer(); ?>