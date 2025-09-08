export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
  sourceUrl: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  // PR & Marketing Communications News
  {
    id: "1",
    title: "How AI is Revolutionizing PR Strategies: Edenbrook Media's 2024 Insights",
    summary: "Our team explores how artificial intelligence is transforming public relations practices, from automated media monitoring to AI-powered content creation and audience analysis.",
    category: "PR & Communication",
    date: "2024-12-15",
    imageUrl: "/news/ai-pr-trends.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "2", 
    title: "Digital PR Strategies That Drive Results: Our Proven Approach",
    summary: "Edenbrook Media shares cutting-edge digital PR strategies including influencer partnerships, data-driven storytelling, and integrated social media campaigns that deliver measurable results.",
    category: "Digital PR",
    date: "2024-12-10",
    imageUrl: "/news/digital-pr-storm.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "The Future of Corporate Communications: Edenbrook's 2025 Predictions",
    summary: "Our communications experts share insights on emerging trends including personalization, crisis management evolution, and the growing importance of brand authenticity in corporate messaging.",
    category: "PR & Marketing",
    date: "2024-12-08",
    imageUrl: "/news/pr-marketing-future.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Ethical AI Implementation in Modern PR Practice",
    summary: "Edenbrook Media's guidelines for responsible AI adoption in communications, ensuring transparency, accuracy, and ethical standards while leveraging technology for better results.",
    category: "Ethics & AI",
    date: "2024-12-05",
    imageUrl: "/news/ai-ethics-pr.jpg",  
    sourceUrl: "#",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "Human Creativity vs AI Efficiency: Finding the Perfect Balance",
    summary: "Our analysis of why human creativity, emotional intelligence, and strategic thinking remain irreplaceable in PR, even as AI capabilities continue to advance.",
    category: "Industry Insights",
    date: "2024-12-11",
    imageUrl: "/news/human-vs-ai-pr.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },

  // Social Media & Corporate Communication
  {
    id: "6",
    title: "Corporate Communication Evolution: Adapting to Digital-First World",
    summary: "Edenbrook Media examines how corporate communication strategies must adapt to remote work, digital transformation, and changing stakeholder expectations in 2024.",
    category: "Corporate Communication",
    date: "2024-12-12",
    imageUrl: "/news/corporate-communication-evolution.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "7",
    title: "Social Media Trends Reshaping Corporate Messaging",
    summary: "Our social media experts identify key trends including short-form video content, authentic storytelling, and employee advocacy that are transforming how corporations communicate.",
    category: "Social Media",
    date: "2024-12-09",
    imageUrl: "/news/social-media-corporate.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "8",
    title: "Navigating the 2024 Social Media Landscape: A Strategic Guide",
    summary: "Comprehensive analysis by our digital team covering platform updates, algorithm changes, and content strategy best practices for maximum engagement and reach.",
    category: "Social Media Strategy",
    date: "2024-08-21",
    imageUrl: "/news/social-media-landscape.jpg",
    sourceUrl: "#",
    readTime: "8 min read"
  },
  {
    id: "9",
    title: "Educational Institution Marketing: Connecting with Gen Z",
    summary: "Edenbrook's education sector specialists share insights on using playful, personal content and authentic storytelling to connect with students and educational stakeholders.",
    category: "Education Marketing",
    date: "2024-02-22",
    imageUrl: "/news/higher-ed-social-media.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "10",
    title: "9 Game-Changing Social Media Marketing Strategies for 2024",
    summary: "Our marketing team reveals essential strategies including micro-influencer partnerships, AI-powered content optimization, and community building for sustainable brand growth.",
    category: "Marketing Trends",
    date: "2024-12-01",
    imageUrl: "/news/biggest-social-trends.jpg",
    sourceUrl: "#",
    readTime: "7 min read"
  },

  // Event Management & Corporate Events
  {
    id: "11",
    title: "Event Industry Innovation: 7 Trends Transforming Experiences",
    summary: "Edenbrook's event management team explores cutting-edge trends from AR/VR integration to hybrid event solutions that are revolutionizing audience engagement and experience design.",
    category: "Event Management",
    date: "2024-12-14",
    imageUrl: "/news/event-industry-trends.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "12",
    title: "Prioritizing Mental Health in Event Planning Teams",
    summary: "Our commitment to event planner wellbeing: addressing stress management, work-life balance, and creating supportive environments in high-pressure event planning scenarios.",
    category: "Event Planning",
    date: "2024-08-08",
    imageUrl: "/news/mental-health-event-planning.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "13",
    title: "Creating Memorable Events: 12 Strategies That Set You Apart",
    summary: "Edenbrook's proven event design strategies including experiential elements, sustainability initiatives, and technology integration that create unforgettable attendee experiences.",
    category: "Event Innovation",
    date: "2024-12-06",
    imageUrl: "/news/standout-event-trends.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "14",
    title: "Overcoming Corporate Event Challenges: Our Solutions Approach",
    summary: "How Edenbrook navigates post-pandemic event planning challenges with innovative solutions for budget optimization, venue selection, and enhanced attendee engagement.",
    category: "Corporate Events",
    date: "2024-02-03",
    imageUrl: "/news/corporate-event-challenges.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "15",
    title: "Case Study: Outstanding Business Events We've Delivered in 2024",
    summary: "Behind-the-scenes insights from Edenbrook's most successful business events this year, featuring innovative design approaches and engagement strategies that exceeded client expectations.",
    category: "Business Events",
    date: "2024-12-06",
    imageUrl: "/news/best-business-events.jpg",
    sourceUrl: "#",
    readTime: "7 min read"
  },

  // Web Design & Digital Marketing
  {
    id: "16",
    title: "B2B Web Design Trends 2025: Edenbrook's Development Insights",
    summary: "Our web development team shares essential design trends for 2025 including AI integration, advanced personalization, and user experience optimization strategies for B2B success.",
    category: "Web Design",
    date: "2024-12-13",
    imageUrl: "/news/b2b-web-design-trends.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "17",
    title: "Digital Marketing Evolution: Key Trends Driving Success",
    summary: "Edenbrook's comprehensive analysis of digital marketing transformation including AI automation, privacy-focused strategies, and omnichannel customer journey optimization.",
    category: "Digital Marketing",
    date: "2024-11-15",
    imageUrl: "/news/digital-marketing-trends.jpg",
    sourceUrl: "#",
    readTime: "8 min read"
  },
  {
    id: "18",
    title: "29 Web Design Elements Dominating User Experience in 2024",
    summary: "Our design team's comprehensive guide to influential web design trends including dark mode optimization, minimalist aesthetics, and interactive elements that drive conversions.",
    category: "Web Design Trends",
    date: "2024-04-02",
    imageUrl: "/news/dominating-web-trends.jpg",
    sourceUrl: "#",
    readTime: "10 min read"
  },
  {
    id: "19",
    title: "Web Design for Business Growth: 6 Essential Strategies",
    summary: "Edenbrook's proven web design methodologies focusing on responsive design, loading speed optimization, and conversion-focused layouts that drive measurable business results.",
    category: "Business Web Design",
    date: "2024-05-15",
    imageUrl: "/news/business-web-design.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "20",
    title: "Strategic Web Design: What Really Matters for Business Success",
    summary: "Our web strategy team breaks down critical design considerations including user experience prioritization, accessibility compliance, and conversion rate optimization techniques.",
    category: "Strategic Web Design",
    date: "2023-12-22",
    imageUrl: "/news/web-design-business-matters.jpg",
    sourceUrl: "#",
    readTime: "7 min read"
  },

  // Creative Design & Branding
  {
    id: "21",
    title: "Media & Entertainment Industry Outlook: Creative Opportunities Ahead",
    summary: "Edenbrook's multimedia team analyzes emerging opportunities in streaming convergence, gaming integration, and social media evolution for creative agencies and content producers.",
    category: "Media & Entertainment",
    date: "2024-11-20",
    imageUrl: "/news/media-entertainment-outlook.jpg",
    sourceUrl: "#",
    readTime: "9 min read"
  },
  {
    id: "22",
    title: "Graphic Design Trends Shaping Brand Identity in 2024",
    summary: "Our creative team explores breakthrough design trends including bold typography evolution, sustainable design practices, and AI-assisted creative workflows for modern brands.",
    category: "Graphic Design",
    date: "2024-10-18",
    imageUrl: "/news/graphic-design-trends.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "23",
    title: "Creative Trends 2024: Edenbrook's Industry Analysis",
    summary: "Our creative directors share insights on emerging creative trends, consumer behavior shifts, and evolving brand storytelling techniques that resonate with modern audiences.",
    category: "Creative Trends",
    date: "2024-09-25",
    imageUrl: "/news/dentsu-creative-trends.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "24",
    title: "Year in Review: Design Excellence Achievements in 2024",
    summary: "Edenbrook's creative team reflects on this year's design highlights, breakthrough projects, and innovative solutions that defined our approach to visual communication.",
    category: "Design Industry",
    date: "2024-12-20",
    imageUrl: "/news/design-2024-review.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "25",
    title: "Branding Excellence Through Strategic Design Innovation",
    summary: "Our branding specialists explore advanced graphic and digital design techniques for creating compelling brand experiences that drive customer loyalty and business growth.",
    category: "Branding Design",
    date: "2024-07-25",
    imageUrl: "/news/branding-design-excellence.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },

  // Additional personalized articles
  {
    id: "26",
    title: "Influencer Marketing ROI: Edenbrook's Data-Driven Insights",
    summary: "Our digital marketing team analyzes creator economy trends with comprehensive data on influencer partnership effectiveness, audience engagement metrics, and ROI optimization strategies.",
    category: "Influencer Marketing",
    date: "2024-11-10",
    imageUrl: "/news/influencer-marketing-report.jpg",
    sourceUrl: "#",
    readTime: "8 min read"
  },
  {
    id: "27",
    title: "Venture Capital Landscape 2024: Strategic Insights for Startups",
    summary: "Edenbrook's business strategy team analyzes venture capital trends, funding patterns, and startup ecosystem developments to help entrepreneurs navigate the investment landscape.",
    category: "Venture Capital",
    date: "2024-12-18",
    imageUrl: "/news/vc-state-2024.jpg",
    sourceUrl: "#",
    readTime: "10 min read"
  },
  {
    id: "28",
    title: "AI Adoption in PR: How We're Leading the Transformation",
    summary: "Edenbrook's experience implementing AI tools for content creation, media monitoring, and analytics, plus practical guidance for PR teams embracing artificial intelligence.",
    category: "AI in PR",
    date: "2024-10-31",
    imageUrl: "/news/ai-pr-adoption.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "29",
    title: "Crisis Communication Excellence: Navigating Digital Challenges",
    summary: "Our crisis communication team shares best practices for managing corporate crises across digital platforms, featuring real-time response strategies and reputation recovery methods.",
    category: "Crisis Communication",
    date: "2024-12-04",
    imageUrl: "/news/crisis-communication-social.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "30",
    title: "Employee Advocacy Success: Building Authentic Brand Stories",
    summary: "How Edenbrook helps companies leverage employee social media presence to build authentic brand narratives, increase audience trust, and amplify corporate messaging reach.",
    category: "Employee Advocacy",
    date: "2024-12-02",
    imageUrl: "/news/employee-advocacy.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  }
];

export const categories = [
  "All Categories",
  "PR & Communication", 
  "Digital PR",
  "PR & Marketing",
  "Ethics & AI",
  "Industry Insights",
  "Corporate Communication",
  "Social Media",
  "Social Media Strategy", 
  "Education Marketing",
  "Marketing Trends",
  "Event Management",
  "Event Planning",
  "Event Innovation",
  "Corporate Events",
  "Business Events",
  "Web Design",
  "Digital Marketing",
  "Web Design Trends",
  "Business Web Design",
  "Strategic Web Design",
  "Media & Entertainment",
  "Graphic Design",
  "Creative Trends",
  "Design Industry",
  "Branding Design",
  "Influencer Marketing",
  "Venture Capital",
  "AI in PR",
  "Crisis Communication",
  "Employee Advocacy"
];