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
    title: "AI Transforms Public Relations: 2024 Industry Trends",
    summary: "Artificial intelligence is revolutionizing PR practices, with professionals increasingly adopting AI tools for content creation, media monitoring, and audience analysis.",
    category: "PR & Communication",
    date: "2024-12-15",
    imageUrl: "/news/ai-pr-trends.jpg",
    sourceUrl: "https://prsay.prsa.org/2024/07/12/trends-that-will-transform-public-relations-over-the-next-3-years/",
    readTime: "5 min read"
  },
  {
    id: "2", 
    title: "Digital PR Trends Taking Industry by Storm",
    summary: "The latest digital PR strategies including influencer partnerships, data-driven storytelling, and integrated social media campaigns are reshaping the industry.",
    category: "Digital PR",
    date: "2024-12-10",
    imageUrl: "/news/digital-pr-storm.jpg",
    sourceUrl: "https://pressconnect.ai/blogs/top-10-pr-trends-2024-taking-the-industry-by-storm/",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "Future of Public Relations and Marketing Predictions",
    summary: "Industry experts share insights on emerging trends in PR and marketing, including personalization, crisis management, and brand authenticity.",
    category: "PR & Marketing",
    date: "2024-12-08",
    imageUrl: "/news/pr-marketing-future.jpg",
    sourceUrl: "https://www.hbi.de/en/blog/the-future-of-public-relations-and-marketing-predictions-for-2024/",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Ethical AI Implementation in PR Practice",
    summary: "PRSA explores the ethical implications of AI-driven PR practices, providing guidelines for responsible technology adoption in communications.",
    category: "Ethics & AI",
    date: "2024-12-05",
    imageUrl: "/news/ai-ethics-pr.jpg",  
    sourceUrl: "https://www.prsa.org/article/navigating-ethical-implications-for-ai-driven-pr-practice",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "2025 PR Predictions: Human Skills vs AI Technology",
    summary: "As AI capabilities surge, human creativity, emotional intelligence, and strategic thinking become more valuable than ever in PR.",
    category: "Industry Insights",
    date: "2024-12-11",
    imageUrl: "/news/human-vs-ai-pr.jpg",
    sourceUrl: "https://prgn.com/prgnfuture/2025-pr-predictions-human-abilities-vs-ai/",
    readTime: "5 min read"
  },

  // Social Media & Corporate Communication
  {
    id: "6",
    title: "Evolution of Corporate Communication in 2024",
    summary: "Corporate communication strategies are adapting to remote work, digital transformation, and changing stakeholder expectations.",
    category: "Corporate Communication",
    date: "2024-12-12",
    imageUrl: "/news/corporate-communication-evolution.jpg",
    sourceUrl: "https://www.linkedin.com/pulse/evolving-role-corporate-communication-2024-key-trends-chittilla-azgnc",
    readTime: "4 min read"
  },
  {
    id: "7",
    title: "Social Media Trends Shaping Corporate Communications",
    summary: "Key social media trends including short-form video content, authentic storytelling, and employee advocacy are transforming corporate messaging.",
    category: "Social Media",
    date: "2024-12-09",
    imageUrl: "/news/social-media-corporate.jpg",
    sourceUrl: "https://5wpr.net/social-media-trends-that-share-corporate-communications/",
    readTime: "5 min read"
  },
  {
    id: "8",
    title: "Social Media Landscape 2024: Insights and Strategies",
    summary: "Comprehensive analysis of the current social media landscape, featuring platform updates, algorithm changes, and content strategy best practices.",
    category: "Social Media Strategy",
    date: "2024-08-21",
    imageUrl: "/news/social-media-landscape.jpg",
    sourceUrl: "https://www.smartsites.com/blog/social-media-landscape-in-2024-insights-trends-and-strategies-for-the-future/",
    readTime: "8 min read"
  },
  {
    id: "9",
    title: "Top Social Media Marketing Trends for Higher Education",
    summary: "Universities and colleges are leveraging playful, personal content and authentic storytelling to connect with students and stakeholders.",
    category: "Education Marketing",
    date: "2024-02-22",
    imageUrl: "/news/higher-ed-social-media.jpg",
    sourceUrl: "https://umarcomm.umn.edu/blog/2024/02/22/tapping-social-media-trends-2024",
    readTime: "6 min read"
  },
  {
    id: "10",
    title: "9 Biggest Social Media Marketing Trends for 2024",
    summary: "Essential social media marketing strategies including micro-influencers, AI-powered content, and community building for brand success.",
    category: "Marketing Trends",
    date: "2024-12-01",
    imageUrl: "/news/biggest-social-trends.jpg",
    sourceUrl: "https://www.kreativemachinez.com/blog/9-biggest-social-media-marketing-trends-to-look-out-for-in-2024/",
    readTime: "7 min read"
  },

  // Event Management & Corporate Events
  {
    id: "11",
    title: "7 Top Event Industry Trends Transforming 2024",
    summary: "From AR/VR experiences to hybrid events, the event industry is undergoing major technological and experiential shifts.",
    category: "Event Management",
    date: "2024-12-14",
    imageUrl: "/news/event-industry-trends.jpg",
    sourceUrl: "https://explodingtopics.com/blog/event-industry-trends",
    readTime: "5 min read"
  },
  {
    id: "12",
    title: "Mental Health Training for Event Planners",
    summary: "Growing recognition of mental health challenges in event planning leads to increased support and training initiatives.",
    category: "Event Planning",
    date: "2024-08-08",
    imageUrl: "/news/mental-health-event-planning.jpg",
    sourceUrl: "https://meetings.skift.com/2025/08/08/theres-a-need-for-mental-health-training-for-event-planners-some-companies-are-stepping-up/",
    readTime: "4 min read"
  },
  {
    id: "13",
    title: "12 Key Event Trends Making Events Stand Out",
    summary: "Innovative event strategies including experiential design, sustainability focus, and technology integration for memorable experiences.",
    category: "Event Innovation",
    date: "2024-12-06",
    imageUrl: "/news/standout-event-trends.jpg",
    sourceUrl: "https://spotme.com/blog/event-trends/",
    readTime: "6 min read"
  },
  {
    id: "14",
    title: "Corporate Event Planning Challenges and Solutions",
    summary: "Event planners navigate post-pandemic challenges with innovative solutions for budget constraints, venue selection, and attendee engagement.",
    category: "Corporate Events",
    date: "2024-02-03",
    imageUrl: "/news/corporate-event-challenges.jpg",
    sourceUrl: "https://hirespace.com/blog/key-challenges-for-corporate-event-planners-in-2024-and-how-to-overcome-them",
    readTime: "5 min read"
  },
  {
    id: "15",
    title: "Best Business Events of 2024: Behind the Scenes",
    summary: "Exclusive insights into the most successful business events of 2024, featuring innovative design and engagement strategies.",
    category: "Business Events",
    date: "2024-12-06",
    imageUrl: "/news/best-business-events.jpg",
    sourceUrl: "https://meetings.skift.com/2024/12/06/the-best-business-events-of-2024-behind-the-scenes/",
    readTime: "7 min read"
  },

  // Web Design & Digital Marketing
  {
    id: "16",
    title: "Top 9 B2B Web Design Trends for 2025",
    summary: "Enhanced web design becomes essential for 2025 marketing plans, featuring AI integration, personalization, and user experience optimization.",
    category: "Web Design",
    date: "2024-12-13",
    imageUrl: "/news/b2b-web-design-trends.jpg",
    sourceUrl: "https://www.windmillstrategy.com/top-9-b2b-web-design-trends/",
    readTime: "6 min read"
  },
  {
    id: "17",
    title: "Key Digital Marketing Trends Shaping 2024",
    summary: "Comprehensive overview of digital marketing evolution including AI automation, privacy-focused strategies, and omnichannel experiences.",
    category: "Digital Marketing",
    date: "2024-11-15",
    imageUrl: "/news/digital-marketing-trends.jpg",
    sourceUrl: "https://digitalmarketinginstitute.com/blog/key-digital-marketing-trends-for-2024",
    readTime: "8 min read"
  },
  {
    id: "18",
    title: "29 Dominating Web Design Trends for 2024",
    summary: "HubSpot reveals the most influential web design trends including dark mode, minimalism, and interactive elements for modern websites.",
    category: "Web Design Trends",
    date: "2024-04-02",
    imageUrl: "/news/dominating-web-trends.jpg",
    sourceUrl: "https://blog.hubspot.com/marketing/web-design-trends-2017",
    readTime: "10 min read"
  },
  {
    id: "19",
    title: "6 Key Web Design Trends for Business Success",
    summary: "Essential web design strategies for businesses including responsive design, loading speed optimization, and conversion-focused layouts.",
    category: "Business Web Design",
    date: "2024-05-15",
    imageUrl: "/news/business-web-design.jpg",
    sourceUrl: "https://www.sixthcitymarketing.com/2024/05/15/web-design-trends/",
    readTime: "5 min read"
  },
  {
    id: "20",
    title: "Web Design Trends 2024: What Matters Most for Businesses",
    summary: "Strategic web design considerations for businesses focusing on user experience, accessibility, and conversion optimization.",
    category: "Strategic Web Design",
    date: "2023-12-22",
    imageUrl: "/news/web-design-business-matters.jpg",
    sourceUrl: "https://www.webstrategyplus.com/web-design-trends-for-2024-what-matters-most-for-businesses/",
    readTime: "7 min read"
  },

  // Creative Design & Branding
  {
    id: "21",
    title: "2024 Media and Entertainment Industry Outlook",
    summary: "Deloitte's comprehensive analysis of media industry trends including streaming convergence, gaming integration, and social media evolution.",
    category: "Media & Entertainment",
    date: "2024-11-20",
    imageUrl: "/news/media-entertainment-outlook.jpg",
    sourceUrl: "https://www.deloitte.com/us/en/Industries/tmt/articles/media-and-entertainment-industry-outlook-trends.html",
    readTime: "9 min read"
  },
  {
    id: "22",
    title: "Biggest Graphic Design Trends for 2024",
    summary: "Creative industry predictions featuring bold typography, sustainable design practices, and AI-assisted creative workflows.",
    category: "Graphic Design",
    date: "2024-10-18",
    imageUrl: "/news/graphic-design-trends.jpg",
    sourceUrl: "https://www.creativeboom.com/insight/biggest-trends-in-graphic-design-for-2024/",
    readTime: "6 min read"
  },
  {
    id: "23",
    title: "Dentsu Creative Trends 2024 Report",
    summary: "Global creative agency insights on emerging creative trends, consumer behavior shifts, and brand storytelling evolution.",
    category: "Creative Trends",
    date: "2024-09-25",
    imageUrl: "/news/dentsu-creative-trends.jpg",
    sourceUrl: "https://www.dentsucreative.com/news/dentsu-creative-trends-2024",
    readTime: "5 min read"
  },
  {
    id: "24",
    title: "What Did Design Look Like in 2024?",
    summary: "Year-end reflection on design industry highlights, breakthrough projects, and creative innovations that defined 2024.",
    category: "Design Industry",
    date: "2024-12-20",
    imageUrl: "/news/design-2024-review.jpg",
    sourceUrl: "https://www.thedrum.com/news/2024/12/20/what-did-design-look-2024",
    readTime: "4 min read"
  },
  {
    id: "25",
    title: "Navigating 2024's Design Trends for Branding Excellence",
    summary: "OGK Creative explores graphic and digital design trends essential for creating compelling brand experiences and visual identity.",
    category: "Branding Design",
    date: "2024-07-25",
    imageUrl: "/news/branding-design-excellence.jpg",
    sourceUrl: "https://ogkcreative.com/studios/navigating-2024s-graphic-digital-design-trends-for-branding-excellence/",
    readTime: "6 min read"
  },

  // Influencer Marketing & Content Strategy
  {
    id: "26",
    title: "Influencer Marketing Trends Report 2024",
    summary: "CreatorIQ's comprehensive analysis of creator economy trends, featuring data-driven insights on influencer partnerships and ROI measurement.",
    category: "Influencer Marketing",
    date: "2024-11-10",
    imageUrl: "/news/influencer-marketing-report.jpg",
    sourceUrl: "https://www.creatoriq.com/white-papers/influencer-marketing-trends-2024",
    readTime: "8 min read"
  },
  {
    id: "27",
    title: "June 2024 Influencer Marketing Insights",
    summary: "Influencer Marketing Hub's monthly report on industry developments, campaign strategies, and performance metrics.",
    category: "Marketing Insights",
    date: "2024-06-15",
    imageUrl: "/news/june-influencer-insights.jpg",
    sourceUrl: "https://influencermarketinghub.com/june-influencer-marketing-report/",
    readTime: "7 min read"
  },
  {
    id: "28",
    title: "Top 5 Influencer Marketing Trends in 2024",
    summary: "Key trends shaping influencer marketing including micro-influencers, authentic partnerships, and performance-based collaborations.",
    category: "Marketing Trends",
    date: "2024-10-05",
    imageUrl: "/news/top-5-influencer-trends.jpg",
    sourceUrl: "https://www.influencer-hero.com/blogs/influencer-marketing-trends",
    readTime: "5 min read"
  },
  {
    id: "29",
    title: "Influencer Marketing Statistics and Trends 2024",
    summary: "Comprehensive statistical analysis of influencer marketing ROI, engagement rates, and industry growth projections.",
    category: "Marketing Statistics",
    date: "2024-03-25",
    imageUrl: "/news/influencer-marketing-stats.jpg",
    sourceUrl: "https://influencity.com/blog/en/influencer-marketing-stats-to-look-for-in-2024",
    readTime: "9 min read"
  },
  {
    id: "30", 
    title: "5 Predicted Influencer Marketing Trends for 2024",
    summary: "Impact.com's predictions for influencer marketing evolution including AI integration, long-term partnerships, and authenticity focus.",
    category: "Marketing Predictions",
    date: "2024-08-30",
    imageUrl: "/news/influencer-predictions.jpg",
    sourceUrl: "https://impact.com/influencer/5-influencer-marketing-trends-2024/",
    readTime: "6 min read"
  },

  // Business Strategy & Venture Capital
  {
    id: "31",
    title: "State of Venture Capital in 2024: Year in Review",
    summary: "Comprehensive analysis of venture capital trends, funding patterns, and startup ecosystem developments throughout 2024.",
    category: "Venture Capital",
    date: "2024-12-18",
    imageUrl: "/news/vc-state-2024.jpg",
    sourceUrl: "https://www.goingvc.com/post/a-year-in-review-the-state-of-venture-capital-in-2024",
    readTime: "10 min read"
  },
  {
    id: "32",
    title: "2024 Venture Capital Investment Trends Report",
    summary: "BIP Ventures analyzes VC investment patterns, sector preferences, and geographic distribution of venture capital in 2024.",
    category: "Investment Trends",
    date: "2025-01-10",
    imageUrl: "/news/vc-investment-trends.jpg",
    sourceUrl: "https://www.bipventures.vc/news/2024-venture-capital-investment-trends-and-impacts-report",
    readTime: "8 min read"
  },
  {
    id: "33",
    title: "NVCA 2025 Yearbook: 2024 VC Industry Insights",
    summary: "National Venture Capital Association releases comprehensive data on venture capital performance, trends, and industry outlook.",
    category: "Industry Reports",
    date: "2025-03-27",
    imageUrl: "/news/nvca-yearbook.jpg",
    sourceUrl: "https://nvca.org/press_releases/nvca-releases-2025-yearbook-showcasing-2024-vc-trends/",
    readTime: "7 min read"
  },
  {
    id: "34",
    title: "Global Venture Capital Outlook: Latest Trends",
    summary: "Bain & Company's analysis of global VC funding patterns, market dynamics, and investment opportunities across regions.",
    category: "Global Markets",
    date: "2024-11-22",
    imageUrl: "/news/global-vc-outlook.jpg",
    sourceUrl: "https://www.bain.com/insights/global-venture-capital-outlook-latest-trends-snap-chart/",
    readTime: "6 min read"
  },
  {
    id: "35",
    title: "Largest Funding Rounds of 2024 Analysis",
    summary: "MicroVentures examines the biggest funding rounds of 2024, analyzing deal structures, valuations, and market implications.",
    category: "Funding Analysis",
    date: "2024-12-05",
    imageUrl: "/news/largest-funding-rounds.jpg",
    sourceUrl: "https://microventures.com/the-largest-funding-rounds-of-2024",
    readTime: "5 min read"
  },

  // AI & Technology in Communications
  {
    id: "36",
    title: "AI Adoption Accelerates in PR Agencies",
    summary: "Survey reveals widespread AI adoption among PR professionals for content creation, media monitoring, and analytics.",
    category: "AI in PR",
    date: "2024-10-31",
    imageUrl: "/news/ai-pr-adoption.jpg",
    sourceUrl: "https://www.odwyerpr.com/story/public/22064/2024-10-31/ai-wildly-popular-among-pr-pros.html",
    readTime: "4 min read"
  },
  {
    id: "37",
    title: "AI Trends 2024: Impact on PR and Communications",
    summary: "Cision webinar explores generative AI tools' impact on PR industry, featuring expert insights on ChatGPT, Bard, and emerging technologies.",
    category: "Technology Trends",
    date: "2024-09-15",
    imageUrl: "/news/ai-trends-pr-comms.jpg",
    sourceUrl: "https://www.cision.com/resources/webinars-and-events/ai-trends-2024-whats-ahead/",
    readTime: "6 min read"
  },
  {
    id: "38",
    title: "Best Practices for AI in Digital PR",
    summary: "Chief Communications Officers share innovative AI strategies for audience engagement, content creation, and measurement.",
    category: "Digital PR",
    date: "2024-11-01",
    imageUrl: "/news/ai-digital-pr-practices.jpg",
    sourceUrl: "https://www.prnewsonline.com/ccos-reveal-best-practices-for-ai-social-media-and-other-digital-pr/",
    readTime: "5 min read"
  },
  {
    id: "39",
    title: "How to Use AI in PR: 2024 Implementation Guide",
    summary: "Comprehensive guide to implementing AI tools in B2B public relations, covering content creation, media relations, and analytics.",
    category: "AI Implementation",
    date: "2024-06-11",
    imageUrl: "/news/ai-pr-implementation.jpg",
    sourceUrl: "https://ec-pr.com/the-role-of-ai-in-b2b-public-relations-what-you-need-to-know/",
    readTime: "7 min read"
  },
  {
    id: "40",
    title: "PR Leaders Forecast AI Integration and Data Growth",
    summary: "Industry leaders predict increased AI adoption, better data integration, and growing C-suite demand for communications expertise.",
    category: "Industry Predictions",
    date: "2024-01-15",
    imageUrl: "/news/pr-leaders-ai-forecast.jpg",
    sourceUrl: "https://www.cision.asia/resources/articles/pr-leaders-predict-increased-ai-adoption-data-integration-c-suite-demand-2024/",
    readTime: "6 min read"
  },

  // Additional Industry News
  {
    id: "41",
    title: "Corporate Communication ROI Measurement Evolution",
    summary: "New metrics and methodologies for measuring corporate communication effectiveness in digital-first business environments.",
    category: "Measurement & Analytics",
    date: "2024-12-07",
    imageUrl: "/news/comms-roi-evolution.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "42",
    title: "Crisis Communication in the Social Media Age",
    summary: "Best practices for managing corporate crises across digital platforms, featuring real-time response strategies and reputation management.",
    category: "Crisis Communication",
    date: "2024-12-04",
    imageUrl: "/news/crisis-communication-social.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "43",
    title: "Employee Advocacy Programs Drive Brand Engagement",
    summary: "Companies leverage employee social media presence to build authentic brand stories and increase audience trust.",
    category: "Employee Advocacy",
    date: "2024-12-02",
    imageUrl: "/news/employee-advocacy.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "44",
    title: "Sustainable Marketing Practices Gain Momentum",
    summary: "Brands adopt environmentally conscious marketing strategies to meet consumer demand for corporate responsibility.",
    category: "Sustainable Marketing",
    date: "2024-11-28",
    imageUrl: "/news/sustainable-marketing.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "45",
    title: "Video Content Dominates B2B Marketing Strategies",
    summary: "Short-form and long-form video content becomes essential for B2B lead generation and thought leadership positioning.",
    category: "Video Marketing",
    date: "2024-11-25",
    imageUrl: "/news/video-content-b2b.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "46",
    title: "Personal Branding for Business Leaders",
    summary: "Executive personal branding strategies that enhance corporate reputation and drive business development opportunities.",
    category: "Personal Branding",
    date: "2024-11-22",
    imageUrl: "/news/personal-branding-leaders.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "47",
    title: "Multi-Channel Event Marketing Integration",
    summary: "Event marketers combine physical, virtual, and hybrid elements to create cohesive attendee experiences across touchpoints.",
    category: "Event Marketing",
    date: "2024-11-18",
    imageUrl: "/news/multichannel-event-marketing.jpg",
    sourceUrl: "#",
    readTime: "7 min read"
  },
  {
    id: "48",
    title: "Data Privacy Compliance in Marketing Communications",
    summary: "Marketing teams navigate evolving privacy regulations while maintaining effective audience targeting and personalization.",
    category: "Data Privacy",
    date: "2024-11-15",
    imageUrl: "/news/data-privacy-marketing.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  },
  {
    id: "49",
    title: "Brand Storytelling Through Multimedia Experiences",
    summary: "Innovative multimedia storytelling techniques that combine video, audio, interactive elements, and immersive technologies.",
    category: "Multimedia Storytelling",
    date: "2024-11-12",
    imageUrl: "/news/multimedia-storytelling.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "50",
    title: "Strategic Partnership Marketing Trends",
    summary: "Businesses leverage strategic partnerships for co-marketing opportunities, audience expansion, and credibility building.",
    category: "Partnership Marketing",
    date: "2024-11-08",
    imageUrl: "/news/strategic-partnerships.jpg",
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
  "Marketing Insights",
  "Marketing Statistics",
  "Marketing Predictions",
  "Venture Capital",
  "Investment Trends",
  "Industry Reports",
  "Global Markets",
  "Funding Analysis",
  "AI in PR",
  "Technology Trends",
  "AI Implementation",
  "Industry Predictions",
  "Measurement & Analytics",
  "Crisis Communication",
  "Employee Advocacy",
  "Sustainable Marketing",
  "Video Marketing",
  "Personal Branding",
  "Event Marketing",
  "Data Privacy",
  "Multimedia Storytelling",
  "Partnership Marketing"
];