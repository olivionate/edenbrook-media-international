export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
  sourceUrl: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "AI-Powered Content Creation: Revolutionizing Marketing Strategies in 2024",
    summary: "Explore how artificial intelligence is transforming content marketing with automated personalization, predictive analytics, and real-time optimization that drives engagement and ROI.",
    category: "AI & Technology",
    date: "2024-12-20",
    imageUrl: "/blogs/ai-content-marketing.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook AI Team"
  },
  {
    id: "blog-2",
    title: "The Rise of Short-Form Video: 90% of Internet Traffic by 2025",
    summary: "Discover why short-form videos are dominating social media platforms and learn proven strategies to create compelling content that captures attention and drives conversions.",
    category: "Social Media",
    date: "2024-12-18",
    imageUrl: "/blogs/short-form-video.jpg",
    sourceUrl: "#",
    readTime: "5 min read",
    author: "Edenbrook Social Team"
  },
  {
    id: "blog-3",
    title: "Digital Transformation Trends: 10 Technologies Reshaping Business",
    summary: "From robotic process automation to advanced AI integration, explore the key technologies that are driving unprecedented efficiency and innovation in modern business.",
    category: "Digital Transformation",
    date: "2024-12-16",
    imageUrl: "/blogs/digital-transformation.jpg",
    sourceUrl: "#",
    readTime: "8 min read",
    author: "Edenbrook Strategy Team"
  },
  {
    id: "blog-4",
    title: "Personalization at Scale: The Future of Customer Experience",
    summary: "Learn how AI-driven personalization is creating hyper-targeted customer experiences that increase engagement by 200% and build lasting brand loyalty.",
    category: "Customer Experience",
    date: "2024-12-14",
    imageUrl: "/blogs/personalization-scale.jpg",
    sourceUrl: "#",
    readTime: "7 min read",
    author: "Edenbrook CX Team"
  },
  {
    id: "blog-5",
    title: "Sustainable Marketing: Building Green Brands That Consumers Love",
    summary: "Discover how sustainability-focused marketing strategies are not just good for the planet but also drive significant business growth and consumer loyalty.",
    category: "Sustainability",
    date: "2024-12-12",
    imageUrl: "/blogs/sustainable-marketing.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook Green Team"
  },
  {
    id: "blog-6",
    title: "Voice Search Optimization: Preparing for the Audio-First Future",
    summary: "With voice searches growing by 35% annually, learn essential strategies to optimize your content for voice assistants and capture this expanding market.",
    category: "SEO & Search",
    date: "2024-12-10",
    imageUrl: "/blogs/voice-search-optimization.jpg",
    sourceUrl: "#",
    readTime: "5 min read",
    author: "Edenbrook SEO Team"
  },
  {
    id: "blog-7",
    title: "The Creator Economy: Partnering with Micro-Influencers for Maximum ROI",
    summary: "Explore why micro-influencers generate 60% higher engagement rates and learn how to build authentic partnerships that deliver measurable business results.",
    category: "Influencer Marketing",
    date: "2024-12-08",
    imageUrl: "/blogs/creator-economy.jpg",
    sourceUrl: "#",
    readTime: "7 min read",
    author: "Edenbrook Influence Team"
  },
  {
    id: "blog-8",
    title: "Interactive Content: Engaging Audiences in the Age of Short Attention Spans",
    summary: "From polls and quizzes to AR experiences, discover how interactive content is boosting engagement rates by 300% and creating memorable brand experiences.",
    category: "Content Strategy",
    date: "2024-12-06",
    imageUrl: "/blogs/interactive-content.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook Content Team"
  },
  {
    id: "blog-9",
    title: "Privacy-First Marketing: Thriving in a Cookieless World",
    summary: "Navigate the post-cookie landscape with first-party data strategies, contextual targeting, and privacy-compliant marketing approaches that build trust.",
    category: "Data Privacy",
    date: "2024-12-04",
    imageUrl: "/blogs/privacy-first-marketing.jpg",
    sourceUrl: "#",
    readTime: "8 min read",
    author: "Edenbrook Privacy Team"
  },
  {
    id: "blog-10",
    title: "Omnichannel Excellence: Creating Seamless Customer Journeys",
    summary: "Master the art of omnichannel marketing with strategies that ensure consistent, personalized experiences across all touchpoints and drive 250% higher purchase frequency.",
    category: "Omnichannel",
    date: "2024-12-02",
    imageUrl: "/blogs/omnichannel-excellence.jpg",
    sourceUrl: "#",
    readTime: "9 min read",
    author: "Edenbrook Journey Team"
  },
  {
    id: "blog-11",
    title: "Community Building: The Ultimate Brand Loyalty Strategy",
    summary: "Learn how building engaged communities around your brand creates 5x higher customer lifetime value and transforms customers into passionate advocates.",
    category: "Community Marketing",
    date: "2024-11-30",
    imageUrl: "/blogs/community-building.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook Community Team"
  },
  {
    id: "blog-12",
    title: "Augmented Reality Marketing: Creating Immersive Brand Experiences",
    summary: "Discover how AR technology is revolutionizing product demonstrations, virtual try-ons, and interactive advertising to drive 40% higher conversion rates.",
    category: "AR Technology",
    date: "2024-11-28",
    imageUrl: "/blogs/ar-marketing.jpg",
    sourceUrl: "#",
    readTime: "7 min read",
    author: "Edenbrook Tech Team"
  },
  {
    id: "blog-13",
    title: "Employee Advocacy: Your Secret Weapon for Authentic Marketing",
    summary: "Harness the power of employee social media presence to amplify brand messaging with authentic voices that generate 8x more engagement than corporate accounts.",
    category: "Employee Advocacy",
    date: "2024-11-26",
    imageUrl: "/blogs/employee-advocacy.jpg",
    sourceUrl: "#",
    readTime: "5 min read",
    author: "Edenbrook HR Team"
  },
  {
    id: "blog-14",
    title: "Real-Time Marketing: Capitalizing on Moments That Matter",
    summary: "Master the art of real-time marketing with tools and strategies that help you respond instantly to trends, events, and cultural moments for maximum impact.",
    category: "Real-Time Marketing",
    date: "2024-11-24",
    imageUrl: "/blogs/real-time-marketing.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook Trends Team"
  },
  {
    id: "blog-15",
    title: "Blockchain in Marketing: Transparency and Trust in Digital Advertising",
    summary: "Explore how blockchain technology is solving ad fraud, improving transparency, and creating new models for customer rewards and loyalty programs.",
    category: "Blockchain",
    date: "2024-11-22",
    imageUrl: "/blogs/blockchain-marketing.jpg",
    sourceUrl: "#",
    readTime: "8 min read",
    author: "Edenbrook Blockchain Team"
  },
  {
    id: "blog-16",
    title: "Neuromarketing: The Science of Consumer Decision Making",
    summary: "Understand how neuroscience insights are informing marketing strategies, from color psychology to emotional triggers that drive purchasing decisions.",
    category: "Neuromarketing",
    date: "2024-11-20",
    imageUrl: "/blogs/neuromarketing.jpg",
    sourceUrl: "#",
    readTime: "7 min read",
    author: "Edenbrook Research Team"
  },
  {
    id: "blog-17",
    title: "Cross-Platform Content Strategies: Maximizing Reach and Engagement",
    summary: "Learn to adapt your content for different platforms while maintaining brand consistency and maximizing engagement across TikTok, LinkedIn, Instagram, and beyond.",
    category: "Content Distribution",
    date: "2024-11-18",
    imageUrl: "/blogs/cross-platform-content.jpg",
    sourceUrl: "#",
    readTime: "6 min read",
    author: "Edenbrook Multi-Platform Team"
  },
  {
    id: "blog-18",
    title: "Marketing Automation 2.0: Beyond Email to Intelligent Customer Journeys",
    summary: "Discover advanced automation strategies that use AI to create dynamic, personalized customer journeys that adapt in real-time based on behavior and preferences.",
    category: "Marketing Automation",
    date: "2024-11-16",
    imageUrl: "/blogs/marketing-automation.jpg",
    sourceUrl: "#",
    readTime: "8 min read",
    author: "Edenbrook Automation Team"
  },
  {
    id: "blog-19",
    title: "Crisis Communication in the Digital Age: Managing Brand Reputation",
    summary: "Master modern crisis communication strategies with real-time monitoring, rapid response protocols, and reputation recovery tactics for the always-online world.",
    category: "Crisis Management",
    date: "2024-11-14",
    imageUrl: "/blogs/crisis-communication.jpg",
    sourceUrl: "#",
    readTime: "9 min read",
    author: "Edenbrook Crisis Team"
  },
  {
    id: "blog-20",
    title: "The Metaverse Marketing Opportunity: Virtual Worlds, Real Business",
    summary: "Explore emerging opportunities in metaverse marketing, from virtual events and showrooms to NFT campaigns and immersive brand experiences in digital worlds.",
    category: "Metaverse",
    date: "2024-11-12",
    imageUrl: "/blogs/metaverse-marketing.jpg",
    sourceUrl: "#",
    readTime: "10 min read",
    author: "Edenbrook Future Team"
  }
];

export const blogCategories = [
  "All Categories",
  "AI & Technology",
  "Social Media",
  "Digital Transformation",
  "Customer Experience",
  "Sustainability",
  "SEO & Search",
  "Influencer Marketing",
  "Content Strategy",
  "Data Privacy",
  "Omnichannel",
  "Community Marketing",
  "AR Technology",
  "Employee Advocacy",
  "Real-Time Marketing",
  "Blockchain",
  "Neuromarketing",
  "Content Distribution",
  "Marketing Automation",
  "Crisis Management",
  "Metaverse"
];